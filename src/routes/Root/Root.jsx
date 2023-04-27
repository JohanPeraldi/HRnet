import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { EmployeesProvider } from '../../context/employees-context';

export default function Root() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <EmployeesProvider>
        <Container fluid>
          <Outlet />
        </Container>
      </EmployeesProvider>
    </LocalizationProvider>
  );
}
