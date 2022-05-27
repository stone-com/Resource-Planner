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

export default App;
