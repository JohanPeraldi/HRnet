import React, { useContext, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { EmployeesContext } from '../../context/employees-context';
import { departments } from '../../data/departments';
import { states } from '../../data/states';
import { formatData, formatDateMonth } from '../../utils/helpers';

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
    <Container fluid>
      <Form action="#" id="create-employee" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Details</legend>
          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <FloatingLabel
                  controlId="floatingFirstName"
                  label="First Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <FloatingLabel
                  controlId="floatingLastName"
                  label="Last Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
                <DatePicker
                  label="Date of Birth"
                  views={['year', 'month', 'day']}
                  value={dateOfBirth}
                  onChange={(newValue) => setDateOfBirth(newValue)}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3" controlId="formBasicStartDate">
                <DatePicker
                  label="Start Date"
                  views={['year', 'month', 'day']}
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                />
              </Form.Group>
            </Col>
          </Row>
        </fieldset>

        <fieldset>
          <legend>Address</legend>
          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3" controlId="formBasicStreet">
                <FloatingLabel
                  controlId="floatingStreet"
                  label="Street"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="street"
                    placeholder="Street"
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3" controlId="formBasicCity">
                <FloatingLabel
                  controlId="floatingCity"
                  label="City"
                  className="mb-3"
                >
                  <Form.Control type="text" name="city" placeholder="City" />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3" controlId="formBasicState">
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
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3" controlId="formBasicZipcode">
                <FloatingLabel
                  controlId="floatingZipcode"
                  label="Zip Code"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="zipCode"
                    placeholder="Zip Code"
                    min="0"
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
        </fieldset>

        <fieldset>
          <legend>Department</legend>
          <Row className={`col-md-6 offset-md-3`}>
            <Form.Group className="mb-3" controlId="formBasicDepartment">
              <Box sx={{ minWidth: 120 }}>
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
            </Form.Group>
          </Row>
        </fieldset>

        <Button type="submit" variant="contained" color="success">
          Save
        </Button>
      </Form>
    </Container>
  );
}

export default CreateEmployeeForm;
