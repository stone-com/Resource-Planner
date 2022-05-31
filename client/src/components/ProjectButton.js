import React, { useEffect, useState, useContext } from 'react';
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { ADD_PROJECT } from '../utils/mutations';
import { DataContext } from '../contexts/DataContext';
import { useMutation, useQuery } from '@apollo/client';

export default function ProjectButton() {
  // bring in resoures and projects from context
  const { resources, setResources, projects, setProjects } =
    useContext(DataContext);
  // show state used for modal
  const [show, setShow] = useState(false);
  // bring in mutations
  const [addProject] = useMutation(ADD_PROJECT);

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
    // const submitData = {
    //   ...formData,
    //   assignedResource: userinfo.assignedResource,
    // };
    // console.log(submitData);
    // const res = await createProject([userinfo.assignedResource, formData]);
    // console.log('check my data', formData, userinfo.assignedResource);
    // if (!res.ok) {
    //   throw new Error('something went wrong!');
    // }
    // window.alert('Project created sucessfully');

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
      <Button className='m-2' variant='success' onClick={handleShow}>
        <AiOutlinePlus />
        Add new project
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
              <Form.Control 
                className='mb-3'
                type='text'
                name='title'
                placeholder="Add Project Name"
                onChange={handleInputChange}
              />


              <Form.Control
                className='mb-3'
                type='text'
                name='description'
                onChange={handleInputChange}
                placeholder="Add Description"
              />



              <Form.Select
                className='mb-3'
                aria-label='Floating label select example'
                name='allocation'
                onChange={handleInputChange}
                >
                <option value=''>time allocation</option>
                <option value={25}>25%</option>
                <option value={50}>50%</option>
                <option value={75}>75%</option>
                <option value={100}>100%</option>
              </Form.Select>


           
              <Form.Control
               className='mb-3'
                type='number'
                min='1'
                max='50'
                name='requiredResNumber'
                onChange={handleInputChange}
                placeholder="resources required"
              />


           
              <Form.Control
                 className='mb-3'
                type='date'
                name='createdAt'
                onChange={handleInputChange}
              />

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
