import React, { useEffect, useState, useContext } from 'react';
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { ADD_PROJECT } from '../utils/mutations';
import { DataContext } from '../contexts/DataContext';
import { useMutation} from '@apollo/client';
import { GETALL_PROJECTS } from '../utils/queries';

export default function ProjectButton() {
  // bring in resoures and projects from context
  const { resources, setResources, projects, setProjects } =
    useContext(DataContext);
  // show state used for modal
  const [show, setShow] = useState(false);
  // bring in mutations
  const [addProject] = useMutation(ADD_PROJECT, {
    refetchQueries: [GETALL_PROJECTS, 'GetAllProjects'],
  });

  const [personName, setPersonName] = useState([]);
  const [formData, setFormData] = useState([]);
  const [projectResources, setProjectResources] = useState([]);

  const handleClose = () => {
    setShow(false);
    setPersonName([]);
    setFormData([]);
    // window.location.reload();
  };
  const handleShow = () => setShow(true);
  // when an input is changed, set the form data state to new data
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // set PersonName state to resources(from context) this will be filtered through to display in the form selection for assigned resources
  useEffect(() => {
    setPersonName(resources);
  }, []);

  const handleChange2 = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      if (projectResources.includes(value)) {
        return;
      }
      setProjectResources((projectResources) => [...projectResources, value]);
    }
  };

  const handleProjectData = async (e) => {
    e.preventDefault();
    await setFormData({ ...formData, assignedResources: projectResources });
    console.log('form submit data:', formData);
    setProjectResources([]);

    addProject({
      variables: {
        title: formData.title,
        description: formData.description,
        allocation: parseInt(formData.allocation, 10),
        requiredResNumber: parseInt(formData.requiredResNumber, 10),
        assignedResources: formData.assignedResources,
      },
    });

    setProjects([...projects, formData]);
    setFormData([]);
    setPersonName([]);
    setShow(false);
  };

  useEffect(() => {
    const filterResources = resources.filter(
      (newData) => newData.availability >= formData.allocation
    );
    setPersonName(filterResources);
  }, [formData.allocation]);

  return (
    <>
      <Button variant='success' onClick={handleShow}>
        <AiOutlinePlus />
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
              value='Add Project Name'
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

                <option value={25}>25%</option>
                <option value={50}>50%</option>
                <option value={75}>75%</option>
                <option value={100}>100%</option>
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
                <input
                  type='checkbox'
                  value={name._id}
                  onClick={handleChange2}
                  // onClick={(e) => console.log(e)}
                />
                <label>
                  {name.personName}
                  {name.availability}
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
