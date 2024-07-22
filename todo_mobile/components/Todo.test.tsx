import React from "react";
import { render } from "@testing-library/react-native";
import TodoCard from "./Todo";
import { Todo } from "../types/Todo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
jest.useFakeTimers();

describe("TodoCard", () => {
  const todo: Todo = {
    id: 1,
    task: "Buy groceries",
    status: "pending",
  };

  it("renders the todo task", () => {
    const client = new QueryClient();
    const { getByText } = render(<QueryClientProvider client={client}><TodoCard todo={todo} /></QueryClientProvider>);
    const taskElement = getByText(todo.task);
    expect(taskElement).toBeTruthy();
  });

});