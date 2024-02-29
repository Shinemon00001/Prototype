import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css'; 

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', { email, password });
            alert("Login successful!");
            setEmail('');
            setPassword('');
            navigate('/pdfeditor');
        } catch (error) {
            alert("Login failed: " + error.response.data);
        }
    };

    return (
        <div className="login-container">
            <h2>User Log-in</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
                <label>Don't have an account? <Link to="/">Register</Link></label>
                <label>Login as  <Link to="/adminLogin">Admin</Link></label>
                <Link to="/forgot-password">ForgotPassword</Link>
            </form>
        </div>
    );
};

export default LoginForm;
