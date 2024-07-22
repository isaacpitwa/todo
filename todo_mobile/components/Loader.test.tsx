import React from 'react';
import { render } from '@testing-library/react-native';
import Loader from './Loader';
jest.useFakeTimers();

describe('Loader', () => {
  it('renders without crashing', () => {
    render(<Loader />);
  });

  it('displays the activity indicator', () => {
    const { getByTestId } = render(<Loader />);
    const activityIndicator = getByTestId('activity-indicator');
    expect(activityIndicator).toBeTruthy();
  });
});