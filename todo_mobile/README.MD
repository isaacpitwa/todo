# Todo Mobile App

This is a mobile application for managing your to-do list. The app allows users to add, view, and manage their tasks efficiently.

## Demo Video

Check out the [demo video](https://www.loom.com/share/b0af0c47b6184cee9840eee0a50e74a9?sid=81465686-0f94-4bda-bfc2-904c7344f982) to see the application in action.

## Features

- Add new tasks
- View a list of tasks
- Mark tasks as completed

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/isaacpitwa/coding_test.git
    cd coding_test/todo_mobile
    ```

2. Install the dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

### Running the App
Before running the app, make sure that the backend server is running. This app requires the [`todo_backend`](../todo_backend/) server to be running in order to function properly.

After successfully running the backend server, update the `API_BASE_URL` in [Config.ts](./Config.ts)  to your server Host.

NOTE: If you're running the backend locally, use `ifConfig` and use en0 ipAddress as host. For example, `http://192.168.11.54:8080`.

#### iOS

1. Start the Simulator or connect an iOS device.

2. Run the app:

    ```sh
    npm run ios
    # or
    yarn ios
    ```

#### Android

1. Start the Android emulator or connect an Android device.

2. Run the app:

    ```sh
    npm run android
    # or
    yarn android
    ```

### Running Tests

To run the tests, use the following command:

```sh
npm test
# or
yarn test

## Tools and Languages Used

This project utilizes the following tools and languages:

- React Native: A JavaScript framework for building mobile applications.
- Node.js: A JavaScript runtime environment.
- npm: A package manager for JavaScript.
- Expo CLI: A command-line interface for developing and building Expo projects.

## Packages Used

The following packages are used in this project:

- react-navigation: A routing and navigation library for React Native.
- axios: A promise-based HTTP client for making API requests.
- react-native-elements: A UI toolkit for building React Native applications.
- react-native-vector-icons: A library for adding customizable icons to React Native applications.
