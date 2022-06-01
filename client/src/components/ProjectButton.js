import React, { useEffect, useState, useContext } from 'react';
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { ADD_PROJECT } from '../utils/mutations';
import { DataContext } from '../contexts/DataContext';
import { useMutation } from '@apollo/client';
import { GETALL_PROJECTS, GETALL_RESOURCES } from '../utils/queries';

export default function ProjectButton() {
  // bring in resoures and projects from context
  const { resources, setResources, projects, setProjects } =
    useContext(DataContext);
  // show state used for modal
  const [show, setShow] = useState();
  // bring in mutations
  const [addProject] = useMutation(ADD_PROJECT, {
    refetchQueries: [
      GETALL_PROJECTS,
      'GetAllProjects',
      GETALL_RESOURCES,
      'GetAllResources',
    ],
  });

  const [personName, setPersonName] = useState([]);
  const [formData, setFormData] = useState({});
  const [projectResources, setProjectResources] = useState([]);
  const [ready, setReady] = useState(false);

  const handleClose = () => {
    setShow(false);
    setPersonName([]);
    setFormData({});
    setProjectResources([]);
    // window.location.reload();
  };
  const handleShow = () => setShow(true);
  // when an input is changed, set the form data state to new data
  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    if (event.target.type === 'checkbox') {
      if (event.target.checked) {
        setProjectResources((projectResources) => [...projectResources, value]);
        // console.log('PR', projectResources);
        // setFormData(
        //   (formdata) =>
        //     (formdata = { ...formData, assignedResources: projectResources })
        // );
        // console.log('formdata:', formData);
        return;
      }
    }

    setFormData({ ...formData, [name]: value });
    console.log('formdata:', formData);
  };
  useEffect(() => {
    setFormData(
      (formdata) =>
        (formdata = { ...formData, assignedResources: projectResources })
    );
    console.log('formdata:', formData);
  }, [projectResources]);
  // set PersonName state to resources(from context) this will be filtered through to display in the form selection for assigned resources
  useEffect(() => {
    setPersonName(resources);
  }, []);

  const handleChange2 = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      // if (projectResources.includes(value)) {
      //   return;
      // }
      setProjectResources((projectResources) => [...projectResources, value]);
      setFormData(
        (formdata) =>
          (formdata = { ...formData, assignedResources: projectResources })
      );
      console.log('formdata:', formData);
    }
    console.log(e.target.type);
  };

  const handleProjectData = async (e) => {
    e.preventDefault();

    console.log('form submit data:', formData);
    setProjects([...projects, formData]);

    // setProjects([...projects, formData]);
    // setProjectResources([]);
    // setFormData([]);
    // setPersonName([]);
    setReady(true);
    setShow(false);
  };

  useEffect(() => {
    console.log(formData);
    addProject({
      variables: {
        title: formData.title,
        description: formData.description,
        allocation: parseInt(formData.allocation, 10),
        requiredResNumber: parseInt(formData.requiredResNumber, 10),
        assignedResources: formData.assignedResources,
      },
    });

    setProjectResources([]);
    setFormData([]);
    setPersonName([]);
  }, [ready]);
  useEffect(() => {
    const filterResources = resources.filter(
      (newData) => newData.availability >= formData.allocation
    );
    setPersonName(filterResources);
  }, [formData.allocation]);

  return (
    <>
      <Button
        id='add-new-project-btn'
        className='m-2'
        variant='success'
        onClick={handleShow}
      >
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
              placeholder='Add Project Name'
              onChange={handleInputChange}
            />

            <Form.Control
              className='mb-3'
              type='text'
              name='description'
              onChange={handleInputChange}
              placeholder='Add Description'
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
              placeholder='resources required'
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
            className='d-flex flex-column flex-wrap m-2'
            // onChange={handleInputChange}
          >
            <legend>Choose Assigned Resources Names:</legend>
            <div className='container'>
              <div className='row'>
                {personName.map((name) => (
                  <div key={name._id} className='col-md-3'>
                    <input
                      type='checkbox'
                      value={name._id}
                      onChange={handleInputChange}

                      // onClick={(e) => console.log(e)}
                    />
                    <label>
                      {name.personName}
                      <br></br>
                      {`(${name.availability})`}
                    </label>
                  </div>
                ))}
              </div>
            </div>
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
