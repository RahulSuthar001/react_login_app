import React from 'react';
import './App.css';

import MyNavBar from './Components/Navbar';

import { Form } from 'react-bootstrap';
import MyForm from './Components/Form';
import MyList from './Components/List';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <MyNavBar/>
      {/* Other routes/components go here */}
     <Routes>
   
     <Route path="/form"   element={<MyForm/>}/>
     <Route path ="/list"  element={<MyList/>}/>
     </Routes>
   
    </Router>
  );
}

export default App;
