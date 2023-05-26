import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
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
import Modal from '@johanpm/modal-window';

function CreateEmployeeForm() {
  const { employees, setEmployees } = useContext(EmployeesContext);
  // Initial state for date pickers must be null. Otherwise, if set to an empty string,
  // the MUI date picker will have error styles.
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [state, setState] = useState('');
  const [department, setDepartment] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const [modalText, setModalText] = useState('Modal window default text');
  const [data, setData] = useState({});

  useEffect(() => {
    if (formIsValid) {
      // Format data
      const formattedData = formatData(data);
      // Update employees state with new employee
      setEmployees([...employees, formattedData]);
    }
  }, [formIsValid]);

  function handleSubmit() {
    const formData = {
      firstName: document.querySelector('input[name="firstName"]').value,
      lastName: document.querySelector('input[name="lastName"]').value,
      // Only format dates if they are not null
      dateOfBirth:
        dateOfBirth !== null
          ? `${dateOfBirth.$y}-${formatDateMonth(
              dateOfBirth.$M + 1
            )}-${formatDateMonth(dateOfBirth.$D)}`
          : '',
      startDate:
        startDate !== null
          ? `${startDate.$y}-${formatDateMonth(
              startDate.$M + 1
            )}-${formatDateMonth(startDate.$D)}`
          : '',
      state: state,
      department: department,
      street: document.querySelector('input[name="street"]').value,
      city: document.querySelector('input[name="city"]').value,
      zipCode: document.querySelector('input[name="zipCode"]').value,
    };

    if (formData.firstName !== '' && formData.lastName !== '') {
      setFormIsValid(true);
      setModalText('Employee created!');
      setData(formData);
    } else {
      setFormIsValid(false);
      setModalText('Please fill out all required fields');
    }
  }

  function handleSelectChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === 'state') {
      setState(value);
    }
    if (name === 'department') {
      setDepartment(value);
    }
  }

  return (
    <Box>
      <form action="#" id="create-employee">
        <fieldset>
          <legend>Personal Details</legend>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  margin="dense"
                  name="firstName"
                  variant="outlined"
                  required
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  margin="dense"
                  name="lastName"
                  variant="outlined"
                  required
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
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
            </Grid>
            <Grid item xs={12} md={6}>
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
            </Grid>
          </Grid>
        </fieldset>

        <fieldset>
          <legend>Address</legend>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Street"
                  margin="dense"
                  name="street"
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="City"
                  margin="dense"
                  name="city"
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="state-label">State</InputLabel>
                  <Select
                    labelId="state-label"
                    id="state"
                    value={state}
                    label="State"
                    name="state"
                    onChange={handleSelectChange}
                  >
                    {states.map((state) => (
                      <MenuItem key={state.name} value={state.name}>
                        {state.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Zip Code"
                  name="zipCode"
                  type="number"
                  variant="outlined"
                />
              </FormControl>
            </Grid>
          </Grid>
        </fieldset>

        <Box sx={{ marginTop: 2, minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="department-label">Department</InputLabel>
            <Select
              labelId="department-label"
              id="department"
              value={department}
              label="Department"
              name="department"
              onChange={handleSelectChange}
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
          <Modal
            type="submit"
            btnOpenText="Save"
            modalText={modalText}
            btnCloseText="X"
            actions={handleSubmit}
          />
        </Box>
      </form>
    </Box>
  );
}

export default CreateEmployeeForm;
