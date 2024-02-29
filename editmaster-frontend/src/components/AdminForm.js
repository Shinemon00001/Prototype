import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./AdminForm.css";

const AdminForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/admin/login', { username, password });
            alert("Admin login successful!");
            navigate('/AdminPanel'); // Redirect to AdminPanel after successful login
        } catch (error) {
            alert("Admin login failed: " + error.response.data);
        }
    };

    return (
        <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit} className="admin-form">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login as Admin</button>
            </form>
            <label>Back to user: <a href="/login">Login</a></label>
        </div>
    );
};

export default AdminForm;
