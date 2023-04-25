import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { EmployeesContext } from '../../context/employees-context';
import styles from './EmployeeTable.module.css';

function EmployeeTable() {
  const { employees } = useContext(EmployeesContext);

  return (
    <Container fluid>
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
          {employees.length > 0 &&
            employees.map((employee) => (
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
          {employees.length === 0 && (
            <tr className={styles.row}>
              <td colSpan="9">No data available in table</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}

export default EmployeeTable;
