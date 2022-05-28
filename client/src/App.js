import React, { createContext } from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { useQuery, gql } from '@apollo/client';
import { GETALL_PROJECTS, GETALL_RESOURCES } from './utils/queries';

const App = () => {
  // query the projects and resources
  const {
    data: resourcesData,
    error: resourceError,
    loading: resourceLoading,
  } = useQuery(GETALL_RESOURCES);
  const {
    data: projectsData,
    error: projectError,
    loading: projectLoading,
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
