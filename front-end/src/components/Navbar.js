import React, { useEffect, useState,  } from 'react';
import { clearEmail, getEmail } from '../utils/localStorage';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider } from '@mui/material/styles';
import {darkTheme} from '../utils/darkTheme';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [workouts, setWorkouts] = useState([]);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    // load workouts on launch of page to menu bar
    useEffect(() => {
        const loadWorkouts = async () => {
            try{
                const userEmail = getEmail();
                if (!userEmail){
                    console.log('No user logged in');
                    navigate('/login');
                    return;
                }
                const response = await fetch(`/api/loadworkouts?user_id=${userEmail}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch workouts');
                }
                const data = await response.json();
                setWorkouts(data);
            }catch (error){
                console.error('Error loading workouts', error);
            }
        };
        loadWorkouts();
    }, [navigate]);


    const handleDelete = async (id) => {
        try{
            const userEmail = getEmail();
            if (!userEmail){
                console.log('No user logged in');
                navigate('/login');
                return;
            }
            const response = await fetch(`/api/deleteworkout?user_id=${userEmail}&routineType=${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok){
                setWorkouts((prevWorkouts) => prevWorkouts.filter((workout) => workout.id !== id));
            }
        }catch (error){
            console.error('Error deleting workout', error);
        }
    };

    
    const handleSignOut = () => {
        setShowAlert(true);
        setTimeout(() => {
            clearEmail();
            navigate('/login');
        }, 1000); 
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };  

    return (
        <ThemeProvider theme={darkTheme}>
            <div>
                {showAlert && <Alert severity="info">Logging Out: Please Wait</Alert>}
                <nav className="navbar">
                    <Button
                        id="home-button"
                        aria-haspopup="true"
                        onClick={() => navigate('/home')}
                    >
                        HOME
                    </Button>
                    <Button
                        id="workouts-button"
                        aria-controls={open ? 'workout-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        VIEW WORKOUTS
                    
                    </Button>
                    <Menu
                        id="workout-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'workouts-button',
                        }}
                    >  
                        {workouts.map((workout, index) => ( 
                            <MenuItem 
                                key={index} 
                                onClick={() => navigate(`/workouts/${workout.id}`)}
                                style={{diaply:'flex', justifyContent:'space-between', alignItems:'center'}}
                            >
                                {workout.name}
                                <IconButton
                                    aria-label='Delete Workout'
                                    size='small'
                                    onClick={(e) =>{
                                        e.stopPropagation(); // Prevents the workout from being clicked
                                        handleDelete(workout.id);
                                    }}
                                    style={{marginLeft: '16px'}}
                                    >
                                        <DeleteForeverIcon/>
                                    </IconButton>
                                
                            </MenuItem>
                        ))} 
                    </Menu>
                    <Button
                        id="signout-button"
                        aria-haspopup="true"
                        onClick={handleSignOut}
                    >
                        SIGN OUT
                    </Button>
                </nav>
            </div>
        </ThemeProvider>
    );
}