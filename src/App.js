

import React, { useState, useNavigate } from "react";
// import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookingApp from "./BookingApp";
import LoginPage from "./components/LoginPage";
import Main from "./components/Main";
function App() {
  

  return (
  <Router>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/loginpage' element={<LoginPage/>} />
    </Routes>
  </Router>
  );
}

export default App;
