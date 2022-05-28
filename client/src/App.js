import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { useQuery } from '@apollo/client';
import { GETALL_PROJECTS, GETALL_RESOURCES } from './utils/queries';

const App = () => {
  // query the projects and resources
  const { data: resourcesData } = useQuery(GETALL_RESOURCES);
  const { data: projectsData } = useQuery(GETALL_PROJECTS);
  let resources = [];
  let projects = [];
  if (resourcesData && projectsData) {
    // save the gql query (data.query return) to variable
    resources = resourcesData.getAllResources;
    projects = projectsData.getAllProjects;
    console.log('resources:', resources);
    console.log('projects:', projects);
  }

  return (
    <>
      <Navbar />
      <Dashboard resources={resources} projects={projects} />
    </>
  );
};

export default App;
