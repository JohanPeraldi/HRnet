import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { EmployeesContext } from '../../context/employees-context';
import { formatData, formatMonth } from '../../utils/helpers';

function CreateEmployeeForm({ handleShowModal }) {
  const { employees, setEmployees } = useContext(EmployeesContext);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    handleShowModal();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    console.log(dateOfBirth);
    data.dateOfBirth = `${dateOfBirth.$y}-${formatMonth(dateOfBirth.$M + 1)}-${
      dateOfBirth.$D
    }`;
    data.startDate = `${startDate.$y}-${formatMonth(startDate.$M + 1)}-${
      startDate.$D
    }`;
    const formattedData = formatData(data);
    // Update employees state
    setEmployees([...employees, formattedData]);
  }

  const states = [
    {
      name: 'Alabama',
      abbreviation: 'AL',
    },
    {
      name: 'Alaska',
      abbreviation: 'AK',
    },
    {
      name: 'American Samoa',
      abbreviation: 'AS',
    },
    {
      name: 'Arizona',
      abbreviation: 'AZ',
    },
    {
      name: 'Arkansas',
      abbreviation: 'AR',
    },
    {
      name: 'California',
      abbreviation: 'CA',
    },
    {
      name: 'Colorado',
      abbreviation: 'CO',
    },
    {
      name: 'Connecticut',
      abbreviation: 'CT',
    },
    {
      name: 'Delaware',
      abbreviation: 'DE',
    },
    {
      name: 'District Of Columbia',
      abbreviation: 'DC',
    },
    {
      name: 'Federated States Of Micronesia',
      abbreviation: 'FM',
    },
    {
      name: 'Florida',
      abbreviation: 'FL',
    },
    {
      name: 'Georgia',
      abbreviation: 'GA',
    },
    {
      name: 'Guam',
      abbreviation: 'GU',
    },
    {
      name: 'Hawaii',
      abbreviation: 'HI',
    },
    {
      name: 'Idaho',
      abbreviation: 'ID',
    },
    {
      name: 'Illinois',
      abbreviation: 'IL',
    },
    {
      name: 'Indiana',
      abbreviation: 'IN',
    },
    {
      name: 'Iowa',
      abbreviation: 'IA',
    },
    {
      name: 'Kansas',
      abbreviation: 'KS',
    },
    {
      name: 'Kentucky',
      abbreviation: 'KY',
    },
    {
      name: 'Louisiana',
      abbreviation: 'LA',
    },
    {
      name: 'Maine',
      abbreviation: 'ME',
    },
    {
      name: 'Marshall Islands',
      abbreviation: 'MH',
    },
    {
      name: 'Maryland',
      abbreviation: 'MD',
    },
    {
      name: 'Massachusetts',
      abbreviation: 'MA',
    },
    {
      name: 'Michigan',
      abbreviation: 'MI',
    },
    {
      name: 'Minnesota',
      abbreviation: 'MN',
    },
    {
      name: 'Mississippi',
      abbreviation: 'MS',
    },
    {
      name: 'Missouri',
      abbreviation: 'MO',
    },
    {
      name: 'Montana',
      abbreviation: 'MT',
    },
    {
      name: 'Nebraska',
      abbreviation: 'NE',
    },
    {
      name: 'Nevada',
      abbreviation: 'NV',
    },
    {
      name: 'New Hampshire',
      abbreviation: 'NH',
    },
    {
      name: 'New Jersey',
      abbreviation: 'NJ',
    },
    {
      name: 'New Mexico',
      abbreviation: 'NM',
    },
    {
      name: 'New York',
      abbreviation: 'NY',
    },
    {
      name: 'North Carolina',
      abbreviation: 'NC',
    },
    {
      name: 'North Dakota',
      abbreviation: 'ND',
    },
    {
      name: 'Northern Mariana Islands',
      abbreviation: 'MP',
    },
    {
      name: 'Ohio',
      abbreviation: 'OH',
    },
    {
      name: 'Oklahoma',
      abbreviation: 'OK',
    },
    {
      name: 'Oregon',
      abbreviation: 'OR',
    },
    {
      name: 'Palau',
      abbreviation: 'PW',
    },
    {
      name: 'Pennsylvania',
      abbreviation: 'PA',
    },
    {
      name: 'Puerto Rico',
      abbreviation: 'PR',
    },
    {
      name: 'Rhode Island',
      abbreviation: 'RI',
    },
    {
      name: 'South Carolina',
      abbreviation: 'SC',
    },
    {
      name: 'South Dakota',
      abbreviation: 'SD',
    },
    {
      name: 'Tennessee',
      abbreviation: 'TN',
    },
    {
      name: 'Texas',
      abbreviation: 'TX',
    },
    {
      name: 'Utah',
      abbreviation: 'UT',
    },
    {
      name: 'Vermont',
      abbreviation: 'VT',
    },
    {
      name: 'Virgin Islands',
      abbreviation: 'VI',
    },
    {
      name: 'Virginia',
      abbreviation: 'VA',
    },
    {
      name: 'Washington',
      abbreviation: 'WA',
    },
    {
      name: 'West Virginia',
      abbreviation: 'WV',
    },
    {
      name: 'Wisconsin',
      abbreviation: 'WI',
    },
    {
      name: 'Wyoming',
      abbreviation: 'WY',
    },
  ];

  const departments = [
    'Sales',
    'Marketing',
    'Engineering',
    'Human Resources',
    'Legal',
  ];

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
                {/* <FloatingLabel
                  controlId="floatingDateOfBirth"
                  label="Date of Birth"
                  className="mb-3"
                >
                  <Form.Control type="date" name="dateOfBirth" />
                </FloatingLabel> */}
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
                {/* <FloatingLabel
                  controlId="floatingStartDate"
                  label="Start Date"
                  className="mb-3"
                >
                  <Form.Control type="date" name="startDate" />
                </FloatingLabel> */}
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
                <FloatingLabel controlId="floatingState" label="State">
                  <Form.Select name="state" aria-label="Select State">
                    {states.map((state) => (
                      <option key={state.name} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                  </Form.Select>
                </FloatingLabel>
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
              <Form.Select name="department" aria-label="Select Department">
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
        </fieldset>

        <Button type="submit" className="my-4">
          Save
        </Button>
      </Form>
    </Container>
  );
}

export default CreateEmployeeForm;
