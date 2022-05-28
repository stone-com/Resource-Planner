import React, { createContext } from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { useQuery, gql } from '@apollo/client';
import { GETALL_PROJECTS, GETALL_RESOURCES } from './utils/queries';

const App = () => {
  // query the projects and resources
  const {
    data: resourcesData,
  } = useQuery(GETALL_RESOURCES);
  const {
    data: projectsData,
  } = useQuery(GETALL_PROJECTS);
  const resources = resourcesData.getAllResources;
  const projects = projectsData.getAllProjects;
  console.log('resources:', resources);
  console.log('projects:', projects);
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
};

export default App;
