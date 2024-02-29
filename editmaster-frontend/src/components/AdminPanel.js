import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./AdminPanel.css";

const AdminPanel = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/admin/users');
            setUsers(response.data);
        } catch (error) {
            alert("Error fetching users: " + error.message);
        }
    };

    const handleActivateDeactivate = async (userId, isActive) => {
        try {
            await axios.patch(`http://localhost:5000/admin/users/${userId}`, { isActive: !isActive });
            getUsers();
        } catch (error) {
            alert("Error updating user: " + error.message);
        }
    };

    return (
        <div className="admin-panel">
            <h1>Admin Panel</h1>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.email}</td>
                            <td>{user.isActive ? 'Active' : 'Inactive'}</td>
                            <td>
                                <button onClick={() => handleActivateDeactivate(user.id, user.isActive)}>
                                    {user.isActive ? 'Deactivate' : 'Activate'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;
