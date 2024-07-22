import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DoctorsList from './pages/DoctorsList';

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <DoctorsList/>
    </QueryClientProvider>
  );
}

export default App;
