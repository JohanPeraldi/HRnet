import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from './components/CreateEmployeeForm/CreateEmployeeForm';
import ModalWindow from './components/ModalWindow/ModalWindow';

function App() {
  // Modal window state and handlers
  const [showModal, setShowModal] = useState(false);
  // Add modal-open class to body when modal is open to prevent scrolling
  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [showModal]);
  // Modal window handlers
  function handleCloseModal() {
    setShowModal(false);
  }
  function handleShowModal() {
    setShowModal(true);
  }

  return (
    <Container fluid>
      <Row className="text-center mt-4">
        <h1>HRnet</h1>
      </Row>
      <Row className="text-center">
        <Link to="employee-list">View Current Employees</Link>
      </Row>
      <Row className="text-center my-4">
        <h2>Create Employee</h2>
      </Row>
      <Row className="text-center">
        <Form handleShowModal={handleShowModal} />
      </Row>
      {showModal && <ModalWindow handleCloseModal={handleCloseModal} />}
    </Container>
  );
}

export default App;
