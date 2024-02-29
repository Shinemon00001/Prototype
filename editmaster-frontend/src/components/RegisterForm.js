import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterForm.css'; // Import CSS file for styling

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/register', { email, password });
            alert("Registration successful!");
            setEmail('');
            setPassword('');
            navigate('/pdfeditor');
        } catch (error) {
            alert("Registration failed: " + error.response.data);
        }
    };

    return (
        <div className="register-container">
            <h2>Welcome to Edit-master</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Register</button>
            </form>
            <label>Already have an account? <Link to="/login">Login</Link></label>
        </div>
    );
};

export default RegisterForm;
