import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { Form, Modal, FloatingLabel } from 'react-bootstrap';
import { ADD_RESOURCE } from '../utils/mutations';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { DataContext } from '../contexts/DataContext';
import { useLazyQuery } from '@apollo/client';
import { GETALL_RESOURCES } from '../utils/queries';

export default function ResourceModal() {
  // bring in setResources from context
  const { resources, setResources } = useContext(DataContext);
  // bring in ADD_RESOURCE mutation
  const [addResource] = useMutation(ADD_RESOURCE);
  const [queryResources] = useLazyQuery(GETALL_RESOURCES);

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState([]);

  let navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    setFormData([]);
    // window.location.reload();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  // handle form submit
  const sendData = async (e) => {
    e.preventDefault();
    addResource({ variables: { personName: formData.personName } });
    console.log(formData);
    setResources([
      ...resources,
      {
        personName: formData.personName,
        availability: 100,
        assignedProjects: [],
      },
    ]);

    setFormData([]);
    setShow(false);
    window.alert('Resource added successfully');
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
