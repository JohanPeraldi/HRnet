import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { EmployeesContext } from '../../context/employees-context';
import { departments } from '../../data/departments';
import { states } from '../../data/states';
import { formatData, formatDateMonth } from '../../utils/helpers';
import dayjs from 'dayjs';

function CreateEmployeeForm({ handleShowModal }) {
  const { employees, setEmployees } = useContext(EmployeesContext);
  // Initial state for date pickers must be null. Otherwise, if set to an empty string,
  // the MUI date picker will show an error.
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [state, setState] = useState('');
  const [department, setDepartment] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleShowModal();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    data.dateOfBirth = `${dateOfBirth.$y}-${formatDateMonth(
      dateOfBirth.$M + 1
    )}-${formatDateMonth(dateOfBirth.$D)}`;
    data.startDate = `${startDate.$y}-${formatDateMonth(
      startDate.$M + 1
    )}-${formatDateMonth(startDate.$D)}`;
    data.state = state;
    data.department = department;
    const formattedData = formatData(data);
    // Update employees state
    setEmployees([...employees, formattedData]);
  }

  function handleChangeState(event) {
    setState(event.target.value);
  }

  function handleChangeDepartment(event) {
    setDepartment(event.target.value);
  }

  return (
    <Box>
      <form action="#" id="create-employee" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Details</legend>
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="First Name"
              margin="dense"
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Last Name"
              margin="dense"
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl fullWidth>
            <DatePicker
              label="Date of Birth"
              minDate={dayjs('1950-01-01')}
              maxDate={dayjs('2007-05-01')}
              views={['year', 'month', 'day']}
              value={dateOfBirth}
              onChange={(newValue) => setDateOfBirth(newValue)}
            />
          </FormControl>
          <FormControl fullWidth>
            <DatePicker
              label="Start Date"
              minDate={dayjs('2000-01-01')}
              maxDate={dayjs('2023-12-31')}
              views={['year', 'month', 'day']}
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
            />
          </FormControl>
        </fieldset>

        <fieldset>
          <legend>Address</legend>
          <FormControl fullWidth>
            <TextField id="outlined-basic" label="Street" variant="outlined" />
          </FormControl>
          <FormControl fullWidth>
            <TextField id="outlined-basic" label="City" variant="outlined" />
          </FormControl>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="state-label">State</InputLabel>
              <Select
                labelId="state-label"
                id="state"
                value={state}
                label="State"
                onChange={handleChangeState}
              >
                {states.map((state) => (
                  <MenuItem key={state.name} value={state.name}>
                    {state.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Zip Code"
              type="number"
              variant="outlined"
            />
          </FormControl>
        </fieldset>

        <Box sx={{ marginTop: 2, minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="department-label">Department</InputLabel>
            <Select
              labelId="department-label"
              id="department"
              value={department}
              label="Department"
              onChange={handleChangeDepartment}
            >
              {departments.map((dpt) => (
                <MenuItem key={dpt} value={dpt}>
                  {dpt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <Button type="submit" variant="contained" color="success">
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default CreateEmployeeForm;
