import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Form from './components/CreateEmployeeForm/CreateEmployeeForm';

function App() {
  return (
    <Box>
      <h1>HRnet</h1>
      <Link to="employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <Form />
    </Box>
  );
}

export default App;
