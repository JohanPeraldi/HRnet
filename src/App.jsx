import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        <h1>HRnet</h1>
      </div>
      <div>
        <Link to="employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
      </div>
    </div>
  );
}

export default App;
