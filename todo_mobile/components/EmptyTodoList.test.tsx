import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import EmptyTodoList from './EmptyTodoList';
import { NavigationContainer } from '@react-navigation/native';
jest.useFakeTimers();

describe('EmptyTodoList', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<NavigationContainer><EmptyTodoList /></NavigationContainer>);
    const leadingText = getByText('No Tasks Added.');
    const descText = getByText('Add a task to get started.');
    const addButton = getByTestId('add-button');
    expect(leadingText).toBeTruthy();
    expect(descText).toBeTruthy();
    expect(addButton).toBeTruthy();
  });
});