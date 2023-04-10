import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeList() {
  return (
    <>
      <h1>Current Employees</h1>
      <Link to="/">Home</Link>
    </>
  );
}

export default EmployeeList;
