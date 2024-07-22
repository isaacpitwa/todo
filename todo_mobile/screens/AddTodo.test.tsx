import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AddTodo from "./AddTodo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
jest.useFakeTimers();

describe("AddTodo", () => {
    const client = new QueryClient();

  it("renders without crashing", () => {
    render(<QueryClientProvider client={client}><NavigationContainer><AddTodo /></NavigationContainer></QueryClientProvider>);
  });

  it("updates the task state when input value changes", () => {
    const { getByPlaceholderText } = render(<QueryClientProvider client={client}><NavigationContainer><AddTodo /></NavigationContainer></QueryClientProvider>);
    const input = getByPlaceholderText("Enter task");
    fireEvent.changeText(input, "New Task");
    expect(input.props.value).toBe("New Task");
  });

});