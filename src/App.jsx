import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './components/CreateEmployeeForm/CreateEmployeeForm';
import ModalWindow from './components/ModalWindow/ModalWindow';

function App() {
  // Modal window state and handlers
  const [showModal, setShowModal] = useState(false);
  function handleCloseModal() {
    setShowModal(false);
  }
  function handleShowModal() {
    setShowModal(true);
  }

  return (
    <>
      <div>
        <h1>HRnet</h1>
      </div>
      <div>
        <Link to="employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form handleShowModal={handleShowModal} />
      </div>
      {showModal && <ModalWindow handleCloseModal={handleCloseModal} />}
    </>
  );
}

export default App;
