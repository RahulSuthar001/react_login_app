import React from 'react';
import './App.css';
import MyHome from './Components/Home';
import MyNavBar from './Components/Navbar';
import MyLogin from './Components/Login';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <MyNavBar/>
      {/* Other routes/components go here */}
     <Routes>
     <Route path="/home" element={<MyHome />} />
     <Route path="/login" element={<MyLogin />} />
     </Routes>
   
    </Router>
  );
}

export default App;
