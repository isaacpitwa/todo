package handlers

import (
	"encoding/json"
	"net/http"
	"sort"
	"strconv"
	"todo-app/internal/models"
	"todo-app/internal/storage"
)

// AddTodoHandler handles the addition of a new to-do item
func AddTodoHandler(w http.ResponseWriter, r *http.Request) {
	// Ensure the request method is POST
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	// Decode the request body into a Todo struct
	var todo models.Todo
	if err := json.NewDecoder(r.Body).Decode(&todo); err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		return
	}

	// Add the new to-do item to the storage
	todo = storage.AddTodo(todo)

	// Respond with the created to-do item
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(todo)
}

// GetTodosHandler handles fetching the list of to-do items
func GetTodosHandler(w http.ResponseWriter, r *http.Request) {
	// Get the list of to-do items from the storage
	todos := storage.GetTodos()

	// Sort the todos by CreatedAt field
    sort.Slice(todos, func(i, j int) bool {
        return todos[i].CreatedAt.After(todos[j].CreatedAt)
    })

	// Set the response content type to JSON
	w.Header().Set("Content-Type", "application/json")

	// Encode the to-do list to JSON and write it to the response
	json.NewEncoder(w).Encode(todos)
}

// UpdateTodoStatusHandler handles updating the status of a specific to-do item
func UpdateTodoStatusHandler(w http.ResponseWriter, r *http.Request) {
	// Ensure the request method is PUT
	if r.Method != http.MethodPut {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	// Get the ID from the URL path
	idStr := r.URL.Query().Get("id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		http.Error(w, "Invalid to-do ID", http.StatusBadRequest)
		return
	}

	// Update the to-do status to completed
	todo, err := storage.UpdateTodoStatus(id, models.Completed)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Respond with the updated to-do item
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(todo)
}
