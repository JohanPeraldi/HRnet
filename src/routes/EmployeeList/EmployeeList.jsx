import React from 'react';
import { Link } from 'react-router-dom';

function EmployeesList() {
  return (
    <>
      <h1>Current Employees</h1>
      <Link to="/">Home</Link>
    </>
  );
}

export default EmployeesList;
