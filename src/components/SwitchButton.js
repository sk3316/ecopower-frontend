import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SwitchButton = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();  // Hook for navigation

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const startSwitchingProcess = () => {
    setShowModal(false);
    navigate('/switching-process');  // Redirect to the switching process page
  };

  return (
    <div className="text-center my-5">
      <button className="btn btn-success btn-lg switch-btn" onClick={handleButtonClick}>
        Switch to Renewable Energy Now
      </button>

      {/* Modal for switching process */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Switch to Renewable Energy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            You're about to start your journey towards a sustainable future! This step-by-step process will guide you in switching from non-renewable to renewable energy.
          </p>
          <p>Are you ready to make the change?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Not Yet
          </Button>
          <Button variant="success" onClick={startSwitchingProcess}>
            Yes, Let’s Do It!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SwitchButton;
