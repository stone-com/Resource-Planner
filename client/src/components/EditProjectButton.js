import React, { useEffect, useState, useContext } from 'react';
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { UPDATE_PROJECT } from '../utils/mutations';
import { DataContext } from '../contexts/DataContext';
import { useMutation } from '@apollo/client';
import { GETALL_PROJECTS, GETALL_RESOURCES } from '../utils/queries';

export default function ProjectButton() {
  // bring in resoures and projects from context
  const { resources, setResources, projects, setProjects, selectedProject } =
    useContext(DataContext);
  // show state used for modal
  const [show, setShow] = useState();
  // bring in mutations
  // bring in mutations
  const [addProject] = useMutation(UPDATE_PROJECT, {
    //   refetch all projects after updating
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
  const handleShow = () => {
    setShow(true);
    console.log(selectedProject);
  };
  // when an input is changed, set the form data state to new data
  const handleInputChange = async (event) => {
    event.target.checked
      ? setFormData({ completed: true })
      : setFormData({ completed: false });
  };
  useEffect(() => {
    setFormData(
      (formdata) =>
        (formdata = { ...formData, assignedResources: projectResources })
    );
    console.log('formdata:', formData);
  }, [projectResources]);
  // set PersonName state to resources(from context) this will be filtered through to display in the form selection for assigned resources
  //   useEffect(() => {
  //     setPersonName(resources);
  //   }, []);

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
    // setReady(true);
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
  }, [show]);

  return (
    <>
      <Button variant='success' onClick={handleShow} className='m-2'>
        Edit Project
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedProject
              ? `Edit ${selectedProject[0].projectName}`
              : 'Edit Project'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>Completed?</p>
            <input
              type='checkbox'
              name='completed'
              value='false'
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <p>Currently Assigned Resources:</p>
            <div>
              {selectedProject ? `${selectedProject[0].assignedResources}` : ''}
            </div>
          </div>
          {/* <FloatingLabel label='Required Resources Number' className='mb-3'>
            <Form.Control
              type='number'
              min='1'
              max='50'
              name='requiredResNumber'
              onChange={handleInputChange}
            />
          </FloatingLabel> */}

          {/* <fieldset
            name='assignedResources'
            class='d-flex flex-column flex-wrap m-2'
            // onChange={handleInputChange}
          >
            <legend>Choose Assigned Resources Names:</legend>

            {personName.map((name) => (
              <div key={name._id}>
                <input
                  type='checkbox'
                  value={name._id}
                  onChange={handleInputChange}
                  // onClick={(e) => console.log(e)}
                />
                <label>
                  {name.personName}
                  {name.availability}
                </label>
              </div>
            ))}
          </fieldset> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleProjectData}>
            Save and edit{' '}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
