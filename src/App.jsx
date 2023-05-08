import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
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
    <Box>
      <h1>HRnet</h1>
      <Link to="employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <Form handleShowModal={handleShowModal} />
      {showModal && <ModalWindow handleCloseModal={handleCloseModal} />}
    </Box>
  );
}

export default App;
