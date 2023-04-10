import React from 'react';
import { Link } from 'react-router-dom';
import Form from './components/CreateEmployeeForm/CreateEmployeeForm';

function App() {
  return (
    <>
      <div>
        <h1>HRnet</h1>
      </div>
      <div>
        <Link to="employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form />
      </div>
    </>
  );
}

export default App;
