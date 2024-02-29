import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import PdfEditor from './components/pdfeditor';
import AdminPanel from './components/AdminPanel';
import AdminForm from './components/AdminForm'; 
import ForgotPassword from './components/ForgotPassword'; 
import ResetPassword from './components/ResetPassword'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/pdfeditor" element={<PdfEditor />} />
          <Route path="/adminLogin" element={<AdminForm />} />
          <Route path="/adminPanel" element={<AdminPanel />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
          <Route path="/reset-password" element={<ResetPassword />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
