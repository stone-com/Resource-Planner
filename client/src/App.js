import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import { useQuery } from '@apollo/client';
import { GETALL_PROJECTS, GETALL_RESOURCES } from './utils/queries';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataContext } from './contexts/DataContext';

//Pages from pages folder - login and signup
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';

const App = () => {
  // set global states, going to be passed into context provider.
  const [projects, setProjects] = useState([]);
  const [resources, setResources] = useState([]);

  // query the projects and resources
  const { data: resourcesData } = useQuery(GETALL_RESOURCES);
  const { data: projectsData } = useQuery(GETALL_PROJECTS);

  useEffect(() => {
    if (resourcesData && resourcesData.getAllResources) {
      setResources(resourcesData.getAllResources);
    }
  }, [resourcesData, setResources]);

  useEffect(() => {
    if (projectsData && projectsData.getAllProjects) {
      setProjects(projectsData.getAllProjects);
    }
  }, [projectsData, setProjects]);

  console.log('res:', resources);
  console.log('proj:', projects);
  return (
    // context provider to provide state access to all children components
    <DataContext.Provider
      value={{ projects, setProjects, resources, setResources }}
    >
      <Router>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </DataContext.Provider>
  );
};

export default App;
