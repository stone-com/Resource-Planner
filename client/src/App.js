import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResourcsModal from './component/ResourcsModal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectButton from './component/ProjectButton';
function App() {
  return (
    <Router>
      <div class='d-flex justify-content-center bg-dark' >
     <ProjectButton/>
     <ResourcsModal/>

    
      </div>
    </Router>
  )
}

export default App;
