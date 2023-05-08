import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { EmployeesProvider } from '../../context/employees-context';

export default function Root() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <EmployeesProvider>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Outlet />
          </Box>
        </Container>
      </EmployeesProvider>
    </LocalizationProvider>
  );
}
