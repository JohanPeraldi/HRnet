import React from 'react';
import { Link } from 'react-router-dom';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';

function EmployeeList() {
  return (
    <>
      <h1>Current Employees</h1>
      <EmployeeTable />
      <Link to="/">Home</Link>
    </>
  );
}

export default EmployeeList;
