import React, { createContext, useState, useEffect } from 'react';
import { generateEmployees } from '../utils/helpers';

export const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  // Create 5 fake employees to always have data to display in the employees' table
  useEffect(() => {
    const fakeEmployees = generateEmployees(5);
    setEmployees(fakeEmployees);
  }, []);

  return (
    <EmployeesContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeesContext.Provider>
  );
};
