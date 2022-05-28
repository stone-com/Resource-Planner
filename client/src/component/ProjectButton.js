import React, { useEffect, useState } from 'react';
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap';
import { getResources, createProject } from '../utils/api';

export default function ProjectButton() {
  const [show, setShow] = useState(false);
  const [personName, setPersonName] = useState([]);
  const [formData, setFormData] = useState([]);

  const [userinfo, setUserInfo] = useState({
    assignedResource: [],
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getperson = async () => {
      const res = await getResources();
      if (!res.ok) {
        console.log('error namees');
      }
      const data = await res.json();
      setPersonName(data);
      // console.log('Fetching data result',data)
    };
    getperson();
  }, []);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChange2 = (e) => {
    const { value, checked } = e.target;
    const { assignedResource } = userinfo;
    console.log(`${value} is ${checked}`);
    if (checked) {
      setUserInfo({
        assignedResource: [...assignedResource, value],
      });
    }
  };

  const handleProjectData = async (e) => {
    e.preventDefault();
    try {
      console.log('needs data', formData, userinfo.assignedResource);
      const res = await createProject([userinfo.assignedResource, formData]);

      if (!res.ok) {
        throw new Error('something went wrong!');
        window.alert('Something went wrong please try again!!');
      }
      window.alert('Project created sucessfully');
      setFormData('');
      setPersonName(' ');

      const project = await res.json();
      if (!project.ok) {
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Add new project
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <FloatingLabel
              controlId='floatingInput'
              label='Add Project Name'
              className='mb-3'
            >
              <Form.Control
                type='text'
                name='title'
                onChange={handleInputChange}
              />
            </FloatingLabel>

            <FloatingLabel label='Add Description' className='mb-3'>
              <Form.Control
                type='text'
                name='description'
                onChange={handleInputChange}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId='floatingSelect'
              label='allocation of resources per percentage  '
              className='mb-3'
            >
              <Form.Select
                aria-label='Floating label select example'
                name='allocation'
                onChange={handleInputChange}
              >
                <option value=''></option>

                <option value='25'>25%</option>
                <option value='50'>50%</option>
                <option value='75'>75%</option>
                <option value='100'>100%</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel label='Required Resources Number' className='mb-3'>
              <Form.Control
                type='number'
                min='1'
                max='50'
                name='requiredResNumber'
                onChange={handleInputChange}
              />
            </FloatingLabel>

            <FloatingLabel label='Project Status/completed' className='mb-3'>
              <Form.Select
                aria-label='Floating label select example'
                name='completed'
                onChange={handleInputChange}
              >
                <option value=''></option>

                <option value='true'>true</option>
                <option value='false'>false</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel label='started Daye' className='mb-3'>
              <Form.Control
                type='date'
                name='createdAt'
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </>

          <fieldset
            name='assignedResources'
            class='d-flex flex-column flex-wrap m-2'
            onChange={handleChange2}
          >
            <legend>Choose Assigned Resources Names:</legend>
            {personName.map((name) => (
              <div key={name._id}>
                <input type='checkbox' value={name._id} />
                <label for='personName' class='p-1'>
                  {name.personName}
                </label>
              </div>
            ))}
          </fieldset>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleProjectData}>
            Save your new project{' '}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
