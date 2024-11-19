import * as React from 'react';
import { clearEmail } from '../utils/localStorage';
import { useNavigate } from 'react-router-dom';



export default function Navbar(){
    const navigate = useNavigate();
    const handleSignOut = () => {
        clearEmail();
        navigate('/login');
    };
    return(
        <nav class="navbar">
            <a href="/home">HOME</a>
            <a href="/lorum">VIEW WORKOUTS</a>
            <a href="#login" onClick={handleSignOut}>SIGN OUT</a>
        </nav>
    );
};