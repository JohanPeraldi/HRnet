import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { EmployeesContext } from '../../context/employees-context';
import { states } from '../../data/states';
import { departments } from '../../data/departments';
import { formatData } from '../../utils/helpers';

function CreateEmployeeForm({ handleShowModal }) {
  const { employees, setEmployees } = useContext(EmployeesContext);

  function handleSubmit(event) {
    event.preventDefault();
    handleShowModal();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const formattedData = formatData(data);
    // Update employees state
    setEmployees([...employees, formattedData]);
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
                <FloatingLabel
                  controlId="floatingDateOfBirth"
                  label="Date of Birth"
                  className="mb-3"
                >
                  <Form.Control type="date" name="dateOfBirth" />
                </FloatingLabel>
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3" controlId="formBasicStartDate">
                <FloatingLabel
                  controlId="floatingStartDate"
                  label="Start Date"
                  className="mb-3"
                >
                  <Form.Control type="date" name="startDate" />
                </FloatingLabel>
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
