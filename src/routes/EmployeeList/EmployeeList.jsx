import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import MUITable from '../../lib-components/MUITable/MUITable';

function EmployeeList() {
  return (
    <Container fluid>
      <Row className="text-center mt-4">
        <h1>Current Employees</h1>
      </Row>
      <Row className="text-center">
        {/* <EmployeeTable /> */}
        <MUITable />
      </Row>
      <Row className="text-center">
        <Link to="/">Home</Link>
      </Row>
    </Container>
  );
}

export default EmployeeList;
