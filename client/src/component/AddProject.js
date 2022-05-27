import React, { useState } from 'react'
import { Modal,FloatingLabel,Form,Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

export default function AddProject() {
  const location = useLocation()
  const { show } = location.state

  return (
    <Modal show={show} >

    <Modal.Header closeButton onClick={!show}  >
      <Modal.Title>Add your Review Now!!</Modal.Title>
    </Modal.Header>
    <Modal.Body>

  hello modal
    </Modal.Body>
    <Modal.Footer>

        <Button variant="secondary"  >
          Close
   
        </Button>
      


    </Modal.Footer>

  </Modal>
  )
}
