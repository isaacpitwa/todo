package storage

import (
	"sync"
	"time"
	"errors"
	"todo-app/internal/models"
)

var (
	todos  []models.Todo
	mutex  sync.Mutex
	nextID int
)

// AddTodo adds a new to-do item to the storage
func AddTodo(todo models.Todo) models.Todo {
	mutex.Lock()
	defer mutex.Unlock()

	// Set the ID, status, and timestamps for the new to-do item
	todo.ID = nextID
	todo.Status = models.Pending
	todo.CreatedAt = time.Now()
	todo.UpdatedAt = time.Now()
	nextID++

	// Add the new to-do item to the list
	todos = append(todos, todo)

	return todo
}

// GetTodos retrieves the list of to-do items from the storage
func GetTodos() []models.Todo {
	mutex.Lock()
	defer mutex.Unlock()

	return todos
}

// UpdateTodoStatus updates the status of a to-do item by its ID
func UpdateTodoStatus(id int, status models.Status) (models.Todo, error) {
	mutex.Lock()
	defer mutex.Unlock()

	for i, todo := range todos {
		if todo.ID == id {
			todos[i].Status = status
			todos[i].UpdatedAt = time.Now()
			return todos[i], nil
		}
	}
	return models.Todo{}, errors.New("to-do item not found")
}
