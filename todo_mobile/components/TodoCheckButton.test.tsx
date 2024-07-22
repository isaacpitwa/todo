import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TodoCheckButton from "./TodoCheckButton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
jest.useFakeTimers();

describe("TodoCheckButton", () => {
    const client = new QueryClient();

  it("renders without crashing", () => {

    render(<QueryClientProvider client={client}><TodoCheckButton completed={false} id={1} /></QueryClientProvider>);
  });

  it("does not render the check icon when completed is false", () => {
    const { queryByTestId } = render(<QueryClientProvider client={client}><TodoCheckButton completed={false} id={1} /></QueryClientProvider>);
    const checkIcon = queryByTestId("check-icon");
    expect(checkIcon).toBeNull();
  });

});