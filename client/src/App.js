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
  console.log(resourcesData);
  const {
    data: projectsData,
    error: projectError,
    loading: projectLoading,
  } = useQuery(GETALL_PROJECTS);
  console.log(projectsData);
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
};

export default App;
