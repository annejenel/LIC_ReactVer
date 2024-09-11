import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Make sure you're using react-router-dom

import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import AddStudent from './AddStudent/AddStudent';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/addstudent' element={<AddStudent />} />
      </Routes>
    </Router>
  );
}
