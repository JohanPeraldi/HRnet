import React from 'react';
import styles from './EmployeeTable.module.css';
import employees from '../../data/employees';

function EmployeeTable() {
  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Start Date</th>
          <th>Department</th>
          <th>Date of Birth</th>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
        </tr>
      </thead>
      <tbody className={styles.body}>
        {employees.map((employee) => (
          <tr key={employee.id} className={styles.row}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.startDate}</td>
            <td>{employee.department}</td>
            <td>{employee.dateOfBirth}</td>
            <td>{employee.address.street}</td>
            <td>{employee.address.city}</td>
            <td>{employee.address.state}</td>
            <td>{employee.address.zip}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
