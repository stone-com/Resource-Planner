import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { Form, Modal, FloatingLabel } from 'react-bootstrap';
import { createResource } from '../utils/api';
import { useNavigate } from 'react-router-dom';

export default function ResourceModal() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState([]);
  let navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    setFormData([]);
    window.location.reload();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const sendData = async (e) => {
    e.preventDefault();
    try {
      const res = await createResource(formData);
      if (!res.ok) {
        window.alert(`Please fill all the fields`);

        throw new Error('something went wrong!');

        setFormData([]);
      }
      const result = res.json();

      window.alert(`🎉🎉🎉 Congrats  has been Added Succesfully`);
    } catch (error) {
      console.error(error);
    }

    setFormData([]);
    setShow(false);
    window.location.reload();
  };

  return (
    <div>
      <Button variant='success' onClick={() => setShow(true)}>
        <AiOutlinePlus />
        Add new resource
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Resource </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Resource Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='person name'
                name='personName'
                onChange={handleInputChange}
                required='required'
              />
            </Form.Group>

            <FloatingLabel
              controlId='floatingSelect'
              label='Resource Availabilty'
            >
              <Form.Select
                aria-label='Floating label select example'
                name='availability'
                onChange={handleInputChange}
                required
              >
                <option></option>
                <option value='0'>0</option>

                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='75'>75</option>
                <option value='100'>100</option>
              </Form.Select>
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={sendData}>
            Save Resource Data{' '}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
