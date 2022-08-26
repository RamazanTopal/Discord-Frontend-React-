import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import './App.css';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import Dashboard from './dashboard/Dashboard';
import AlertNotification from './components/AlertNotification';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/dashboard" exact />} />
      </Routes>
      <AlertNotification />
    </Router>
  );
}

export default App;
