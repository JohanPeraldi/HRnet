import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { EmployeesProvider } from '../../context/employees-context';

export default function Root() {
  return (
    <EmployeesProvider>
      <Container fluid>
        <Outlet />
      </Container>
    </EmployeesProvider>
  );
}
