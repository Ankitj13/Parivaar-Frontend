import React, { useState } from 'react';
import { Modal, ModalBody, ModalDialog, ModalFooter, ModalTitle } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

function ModelComp(props) {
    
    return (
        <div   class="content-wrapper">
        <Modal
        {...props}
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default ModelComp
