import React, { useState } from 'react';
import axios from 'axios';
import "./ResetPassword.css";

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleResetPassword = async () => {
        try {
            await axios.post('http://localhost:5000/reset-password', { password, confirmPassword });
            setMessage('Password reset successfully!');
        } catch (error) {
            setMessage('Failed to reset password');
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} required id="reset_fields" />
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required id="reset_fields" />
            <button onClick={handleResetPassword} id="reset-button-width">Reset Password</button>
            <p>{message}</p>
        </div>
    );
};

export default ResetPassword;
