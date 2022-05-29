import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { useQuery } from '@apollo/client';
import { GETALL_PROJECTS, GETALL_RESOURCES } from './utils/queries';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages from pages folder - login and signup
import Login from './pages/Login';
import Signup from './pages/Signup';

import ProjectButton from './components/ProjectButton';

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
      <Router>
        <div>
          <Navbar />
          <Dashboard resources={resources} projects={projects} />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
