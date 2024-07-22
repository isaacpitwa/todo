import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HeaderLeft from './HeaderLeft';
jest.useFakeTimers();

describe('HeaderLeft', () => {
  it('renders without crashing', () => {
    const navigation = { goBack: jest.fn() };
    render(<HeaderLeft navigation={navigation} />);
  });

  it('calls navigation.goBack() when pressed', () => {
    const navigation = { goBack: jest.fn() };
    const { getByTestId } = render(<HeaderLeft navigation={navigation} />);
    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);
    expect(navigation.goBack).toHaveBeenCalled();
  });
});