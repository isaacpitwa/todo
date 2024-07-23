import React from 'react';
import { render, screen } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';
import DoctorsList from './DoctorsList';

jest.mock('@tanstack/react-query');

describe('DoctorsList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: true,
      isError: false,
      data: null,
    });

    render(<DoctorsList />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('renders error state', () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: true,
      data: null,
    });

    render(<DoctorsList />);

    expect(screen.getByText('Error fetching doctors')).toBeInTheDocument();
  });

  it('renders doctors list', () => {
    const doctors = [
      { id: 1, name: 'Dr. John Doe' },
      { id: 2, name: 'Dr. Jane Smith' },
    ];

    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      data: doctors,
    });

    render(<DoctorsList />);

    expect(screen.getByText('Doctors List')).toBeInTheDocument();
    expect(screen.getByText('Dr. John Doe')).toBeInTheDocument();
    expect(screen.getByText('Dr. Jane Smith')).toBeInTheDocument();
  });
});