import React from 'react';
import { render, screen } from '@testing-library/react';
import Doctor from './Doctor';
import { TypeDoctor } from '../types/Doctor';

const mockDoctor:TypeDoctor = {
  id: "1",
  fullname: 'Dr. John Doe',
  clinic: 'ABC Clinic',
  phone: '1234567890',
  gender: 'Male',
  email: 'johndoe@example.com',
  photo: 'https://example.com/photo.jpg',
};

describe('Doctor', () => {
  it('renders doctor component with correct data', () => {
    render(<Doctor doctor={mockDoctor} />);

    expect(screen.getByText('Dr. John Doe')).toBeInTheDocument();
    expect(screen.getByText('ABC Clinic')).toBeInTheDocument();
    expect(screen.getByText('Phone: 1234567890')).toBeInTheDocument();
    expect(screen.getByText('Gender: Male')).toBeInTheDocument();
    expect(screen.getByText('Email: johndoe@example.com')).toBeInTheDocument();
    expect(screen.getByAltText('Dr. John Doe')).toHaveAttribute(
      'src',
      'https://example.com/photo.jpg'
    );
  });
});