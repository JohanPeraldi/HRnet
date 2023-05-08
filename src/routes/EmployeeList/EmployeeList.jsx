import React from 'react';
import { Link } from 'react-router-dom';
// import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import MUITable from '../../lib-components/MUITable/MUITable';

function EmployeeList() {
  return (
    <>
      <h1>Current Employees</h1>
      {/* <EmployeeTable /> */}
      <MUITable />
      <Link to="/">Home</Link>
    </>
  );
}

export default EmployeeList;
