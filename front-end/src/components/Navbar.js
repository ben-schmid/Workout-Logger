import React, { useState } from 'react';
import { clearEmail } from '../utils/localStorage';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

export default function Navbar() {
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleSignOut = () => {
        setShowAlert(true);
        setTimeout(() => {
            clearEmail();
            navigate('/login');
        }, 1000); 
    };

    return (
        <div>
            {showAlert && <Alert severity="info">Logging Out: Please Wait</Alert>}
            <nav className="navbar">
                <a href="/home">HOME</a>
                <a href="/lorum">VIEW WORKOUTS</a>
                <a href="#" onClick={handleSignOut}>SIGN OUT</a>
            </nav>
        </div>
    );
}