import React, { useState } from 'react';
import axios from 'axios';
import "./ForgotPassword.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSendMail = async () => {
        try {
            await axios.post('http://localhost:5000/forgot-password', { email });
            setMessage('Password reset email sent successfully!');
        } catch (error) {
            setMessage('Failed to send password reset email');
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <input type="email" id="forgot-email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button id="forgot-button" onClick={handleSendMail}>Send Email</button>
            <p>{message}</p>
        </div>
    );
};

export default ForgotPassword;
