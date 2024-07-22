package handlers

import (
	"encoding/json"
	"net/http"
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

	// Set the response content type to JSON
	w.Header().Set("Content-Type", "application/json")

	// Encode the to-do list to JSON and write it to the response
	json.NewEncoder(w).Encode(todos)
}
