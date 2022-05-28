<<<<<<< HEAD
import React, { createContext } from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { useQuery, gql } from '@apollo/client';
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
=======
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectButton from './component/ProjectButton';
function App() {
  return (
    <Router>
      <div >
      <Routes>
        
          <Route 
            path="/addproject" 
            element={<ProjectButton />} 
          />
        
        </Routes>
     

    
      </div>
    </Router>
  )
}
>>>>>>> 0f0c9c0ceb927aff941452fe694733d6bd5baa2b

export default App;
