import React, { useContext, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { EmployeesContext } from '../../context/employees-context';
import { generateEmployees } from '../../utils/helpers';

const columns = [
  { field: 'col1', headerName: 'First Name', width: 100 },
  { field: 'col2', headerName: 'Last Name', width: 100 },
  { field: 'col3', headerName: 'Start Date', width: 100 },
  { field: 'col4', headerName: 'Department', width: 100 },
  { field: 'col5', headerName: 'Date of Birth', width: 100 },
  { field: 'col6', headerName: 'Street', width: 200 },
  { field: 'col7', headerName: 'City', width: 150 },
  { field: 'col8', headerName: 'State', width: 150 },
  { field: 'col9', headerName: 'Zip Code', width: 150 },
];

export default function MUITable() {
  const { employees, setEmployees } = useContext(EmployeesContext);

  // Make sure that there are at least 5 fake employees to display
  useEffect(() => {
    if (employees.length < 5) {
      const additionalEmployees = generateEmployees(5 - employees.length);
      setEmployees((prevEmployees) => [
        ...prevEmployees,
        ...additionalEmployees,
      ]);
    }
  }, [employees.length, setEmployees]);

  const rows = [
    ...employees.map((employee, index) => ({
      id: index,
      col1: employee.firstName,
      col2: employee.lastName,
      col3: employee.startDate,
      col4: employee.department,
      col5: employee.dateOfBirth,
      col6: employee.address.street,
      col7: employee.address.city,
      col8: employee.address.state,
      col9: employee.address.zip,
    })),
  ];

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
