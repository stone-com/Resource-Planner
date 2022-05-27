import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddProject from './component/AddProject';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectButton from './component/ProjectButton';
function App() {
  const [show,setshow]=useState(true);
  return (
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">

<ProjectButton   />
     

        <Routes>
       
          <Route 
            path="/newproject" 
            element={<AddProject show={show}/>} 
         />
        
        </Routes>
      </div>
    </Router>
  )
}

export default App;
