import React from 'react';
import styles from './ModalWindow.module.css';

function ModalWindow() {
  function handleCloseModal() {
    // setShowModal(false);
    console.log('Modal should close');
  }

  return (
    <div className={styles['modal-overlay']}>
      <div className={styles.modal}>
        <div className={styles['modal-content']}>
          <span className={styles.close} onClick={handleCloseModal}></span>
          <p>Employee created!</p>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
