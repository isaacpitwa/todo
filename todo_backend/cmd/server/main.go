package main

import (
	"log"
	"net/http"
	"todo-app/internal/handlers"
	"todo-app/pkg/logger"
)

func main() {
	// Initialize logger
	logger.Init()

	// Define HTTP handlers for the endpoints
	http.HandleFunc("/addTodo", handlers.AddTodoHandler)
	http.HandleFunc("/getTodos", handlers.GetTodosHandler)

	// Start the HTTP server on port 8080
	log.Println("Server is running on port 8080")
	http.ListenAndServe(":8080", nil)
}
