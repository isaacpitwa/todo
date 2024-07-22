# Todo App

A simple Todo application implemented in Go with a RESTful API.

## Project Structure

```
todo-app/
├── cmd/
│   └── server/
│       └── main.go
├── internal/
│   ├── handlers/
│   │   └── todo.go
│   ├── models/
│   │   └── todo.go
│   └── storage/
│       └── memory.go
├── pkg/
│   └── logger/
│       └── logger.go
├── go.mod
└── go.sum
```

- **cmd/server**: Contains the entry point for the application.
- **internal/handlers**: Contains HTTP handler functions.
- **internal/models**: Contains data models.
- **internal/storage**: Contains storage logic.
- **pkg/logger**: Contains a reusable logging utility.
- **go.mod**: Go module definition.
- **go.sum**: Go module dependencies.

## Setup and Running the Server

### Prerequisites

- Go 1.16 or later installed. You can download it from [here](https://golang.org/dl/).

### Steps

1. **Clone the repository**

   ```sh
   git clone https://github.com/isaacpitwa/coding_test.git
   cd coding_test/todo-backend
   ```

2. **Install dependencies**

   ```sh
   go mod tidy
   ```

3. **Run the server**

   ```sh
   go run cmd/server/main.go
   ```

   The server will start and listen on port `8080`.

## API Endpoints

### Add a Todo

- **URL**: `/addTodo`
- **Method**: `POST`
- **Request Body**:

  ```json
  {
    "task": "Learn Go"
  }
  ```

- **Response**:

  ```json
  {
    "id": 1,
    "task": "Learn Go",
    "status": "pending",
    "createdAt": "2023-07-22T12:34:56Z",
    "updatedAt": "2023-07-22T12:34:56Z"
  }
  ```

### Get All Todos

- **URL**: `/getTodos`
- **Method**: `GET`
- **Response**:

  ```json
  [
    {
      "id": 1,
      "task": "Learn Go",
      "status": "pending",
      "createdAt": "2023-07-22T12:34:56Z",
      "updatedAt": "2023-07-22T12:34:56Z"
    }
  ]
  ```

## Project Details

### `cmd/server/main.go`

- Entry point of the application.
- Initializes the logger and starts the HTTP server.

### `internal/handlers/todo.go`

- Contains the HTTP handlers `AddTodoHandler` and `GetTodosHandler`.

### `internal/models/todo.go`

- Defines the `Todo` struct and `Status` type.

### `internal/storage/memory.go`

- Contains in-memory storage logic for adding and retrieving to-do items.

### `pkg/logger/logger.go`

- Initializes and configures the logger.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
