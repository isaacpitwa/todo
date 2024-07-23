# Repository for Challenge Solutions

This repository contains solutions to the challenge questions, structured in separate folders for clarity and organization.

### Demo Videos

- [Todo Backend Demo Video](https://www.loom.com/share/0eaaddd2fe5e4d14adcb282df4288410?sid=4e669713-bfbe-43d4-98b3-7ede455292bf)
- [Todo Mobile Demo Video](https://www.loom.com/share/b0af0c47b6184cee9840eee0a50e74a9?sid=8468e20c-585c-4db2-8318-e7f15feb50eb)
- [Doctor List Demo Video](https://www.loom.com/share/02e289f0aa1c414597d6c5bd53619a18?sid=b13fe78f-f155-4ff2-9636-a5eddff435ce)

## Structure

- `todo_backend/`: Solution to the backend in Go for managing todos.
- `todo-mobile/`: Solution to the front-end in React Native for managing todos.
- `doctor-list/`: Solution to the React app for displaying a list of doctors.
- `most_common-chars/`: Solution to finding the most common characters in a string.

## Solutions

### 1. To-Do Backend (todo_backend)

A Go backend that lets you add a todo and get the list of todos.

#### Endpoints

- `POST /addTodo`: Adds a new todo.
- `GET /getTodos`: Retrieves the list of todos.

For more details, refer to the [todo_backend README](todo_backend/README.MD).


### 2. To-Do Mobile (todo-mobile)

A React Native front-end that lets you add a todo and get the list of todos. The front-end calls the backend routes.

For more details, refer to the [todo-mobile README](todo-mobile/README.MD).


#### Setup

1. Navigate to the `todo-mobile` directory:
   ```bash
   cd todo-mobile
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the React Native app:
   ```bash
   npm start
   ```

### 3. Most Common Characters (most_common-chars)

A Go function that returns a set of the most common characters in a given string.

#### Example

For the word "annoying", the most common character is `{'n'}`. For the word "implementation", the most common characters are `{'i', 'm', 'e', 't', 'n'}`.

For more details, refer to the [most_common-chars README](most_common-chars/README.MD).


#### Usage

1. Navigate to the `most_common-chars` directory:
   ```bash
   cd most_common-chars
   ```
2. Run the Go file:
   ```bash
   go run main.go
   ```

### 4. Doctor List (doctor-list)

A simple React app that displays a list of doctors using TailwindCSS for styling.
For more details, refer to the [doctor-list README](doctor-list/README.MD).


#### Setup

1. Navigate to the `doctor-list` directory:
   ```bash
   cd doctor-list
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the React app:
   ```bash
   npm start
   ```

### Optional Task: Review and Refactor Code

Here are some improvements:

1. **Async/Await**: Use `async`/`await` to handle asynchronous requests instead of directly assigning `axios(query)` to `res`.
2. **Parameter Validation**: Validate and handle cases where `url` or `token` might be missing or invalid.
3. **Logging and Error Handling**: Improve logging and error handling for better readability and debugging.
4. **Code Duplication**: Refactor to avoid duplicating code, particularly in the `get` and `post` methods.
5. **Environment-based Logging**: Make logging conditional based on the environment (development or production).
6. **Extract Header Generation**: Extract header generation into a separate function to avoid redundancy.

Here is the refactored code:

```javascript
import axios from 'axios';

const generateHeaders = (token) => {
  return {
    Authorization: token ? `Bearer ${token}` : '',
    Accept: 'application/json',
    'X-Request-ID': Math.floor(Math.random() * 1000000),
  };
};

const logQueryResponse = (query, res) => {
  console.log('Query: ', query);
  if (res.status.toString().startsWith('2')) {
    console.log('Response: ', res);
  } else {
    console.error('Response: ', res);
  }
};

const handleError = (error) => {
  if (error.response) {
    console.error('Response error: ', error.response);
  } else {
    console.error('Error: ', error.message);
  }
};

export const Service = {
  get: async (url, token, params = {}, log = false) => {
    if (!url || !token) {
      throw new Error('URL and token are required');
    }

    const headers = generateHeaders(token);
    const query = {
      method: 'get',
      url,
      headers,
      ...(params ? { params } : {}),
    };

    try {
      const res = await axios(query);

      if (log) {
        logQueryResponse(query, res);
      }

      return res;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  post: async (url, token, data, log = true) => {
    if (!url || !token) {
      throw new Error('URL and token are required');
    }

    const headers = {
      ...generateHeaders(token),
      'Content-Type': 'application/json',
    };
    const query = {
      method: 'post',
      url,
      headers,
      data,
    };

    try {
      const res = await axios(query);

      if (log) {
        logQueryResponse(query, res);
      }

      return res;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
};
```

This repository contains all the solutions to the provided challenge questions. Follow the setup instructions for each solution to run and test them locally.
