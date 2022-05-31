import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import { useQuery } from '@apollo/client';
import { GETALL_PROJECTS, GETALL_RESOURCES } from './utils/queries';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataContext } from './contexts/DataContext';
import Auth from './utils/auth';

//Pages from pages folder - login and signup
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';

const App = () => {
  // set global states, going to be passed into context provider.
  const [projects, setProjects] = useState([]);
  const [resources, setResources] = useState([]);
  // set selected project resource, for taking ID value from selected checkbox in projectlist and using it in edit project mutation
  const [selectedProject, setSelectedProject] = useState([]);

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
  console.log(projectsData);

  console.log('res:', resources);
  console.log('proj:', projects);
  return (
    // context provider to provide state access to all children components
    <DataContext.Provider
      value={{
        projects,
        setProjects,
        resources,
        setResources,
        selectedProject,
        setSelectedProject,
      }}
    >
      <Router>
        <Routes>
          {Auth.loggedIn() ? (
            <Route path='/dashboard' element={<Dashboard />} />
          ) : null}
          <Route path='/signup' element={<Signup />} />
          <Route exact path='/' element={<Login />} />
          <Route path='*' element={<Login />} />
        </Routes>
      </Router>
    </DataContext.Provider>
  );
};

export default App;
