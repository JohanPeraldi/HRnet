import React from 'react';
import { Outlet } from 'react-router-dom';
import { EmployeesProvider } from '../../context/employees-context';
import styles from './Root.module.css';

export default function Root() {
  return (
    <EmployeesProvider>
      <div className={styles.container}>
        <Outlet />
      </div>
    </EmployeesProvider>
  );
}
