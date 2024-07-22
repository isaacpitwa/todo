import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import TodoList from './TodoList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
jest.useFakeTimers();

describe('TodoList', () => {
    const client = new QueryClient();

  it('renders the loader when loading', () => {
    const { getByTestId } = render(<QueryClientProvider client={client}><TodoList/></QueryClientProvider>);
    const loader = getByTestId('loader');
    expect(loader).toBeTruthy();
  });

});