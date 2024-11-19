import React, { useState, useEffect } from 'react';
import { styled, createTheme} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { TextField } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { getEmail } from '../utils/localStorage';

const StyledTableContainer = styled(TableContainer)({
    width: 'auto',
    maxWidth: '700px',
    margin: '0 auto', 
    display: 'block',
});

const StyledTableCell = styled(TableCell)(({theme}) =>({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#0081b4',
        color: theme.palette.common.white,
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#d7d7d7',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  export default function WorkoutTable( {data, routineType}){

    const [weights, setWeights] = useState({});
    const navigate = useNavigate();

    
        const loadWeight = async() =>{
            try{
                const userEmail = getEmail();
                if (!userEmail){
                    console.log('No user logged in')
                    navigate('/login');
                }
                const response = await fetch(`/api/weights/${routineType}`)
                const savedWeight = await response.json();
                setWeights(savedWeight);
            }catch (error){
                console.error('Error loading weights', error);
            }
        };
    useEffect(() =>{
        loadWeight();
    }, [routineType]);

    const handleWeightChange = async (exercise, value) => {
        const newWeights = {
            ...weights,
            [exercise]: value
        };
        setWeights(newWeights);


        // testing to see what data is being sent to back end in console
        const data = {
            routineType,
            exercise,
            weight: value
        };
    
        console.log('Data:', JSON.stringify(data));
        //end of testing

        //send and save to backend database
        try{
            const userEmail = getEmail();
            if (!userEmail){
                console.log('No user logged in')
                navigate('/login');
            }
           const response = await fetch('/api/weights',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: userEmail,
                    routineType,
                    exercise,
                    weight: value


                }),
            });
        
        }catch (error){
            console.error('Error saving weight', error);
        }
    };

    return(
        <StyledTableContainer component={Paper} sx={{ marginBottom: '50px' }}>
            <Table className='workout-table' sx={{ minWidth: 600 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Exercise</StyledTableCell>
                        <StyledTableCell>Sets</StyledTableCell>
                        <StyledTableCell>Reps</StyledTableCell>
                        <StyledTableCell>Weight</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) =>(
                        <StyledTableRow key = {row.exercise}>
                            <StyledTableCell component="th" scope="row">
                            {row.exercise}
                            </StyledTableCell> 
                            <StyledTableCell>{row.sets}</StyledTableCell>
                            <StyledTableCell>{row.reps}</StyledTableCell>
                            <StyledTableCell>
                                <TextField
                                    variant='standard'
                                    size='small'
                                    value={weights[row.exercise] || ''}  
                                    onChange={(e) => handleWeightChange(row.exercise, e.target.value)}  
                                />
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </StyledTableContainer>
    )
  }