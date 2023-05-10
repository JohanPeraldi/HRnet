import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
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
  // Searchbar input state
  const [searchValue, setSearchValue] = useState('');

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

  // Filter employees based on searchbar input
  const filteredEmployees = employees.filter((employee) => {
    const searchRegex = new RegExp(searchValue, 'i');
    return (
      searchRegex.test(employee.firstName) ||
      searchRegex.test(employee.lastName) ||
      searchRegex.test(employee.startDate) ||
      searchRegex.test(employee.department) ||
      searchRegex.test(employee.dateOfBirth) ||
      searchRegex.test(employee.address.street) ||
      searchRegex.test(employee.address.city) ||
      searchRegex.test(employee.address.state) ||
      searchRegex.test(employee.address.zip)
    );
  });

  const rows = [
    ...filteredEmployees.map((employee, index) => ({
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
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Search"
              margin="dense"
              name="search"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              variant="outlined"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <DataGrid rows={rows} columns={columns} />
        </Grid>
      </Grid>
    </Box>
  );
}
