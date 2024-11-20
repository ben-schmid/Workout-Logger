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
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
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
    const [debounceWeights, setDebounceWeights] = useState(null);
    const [loading, setLoading] = useState(true); //loading state
    const navigate = useNavigate();

    
        const loadWeight = async() =>{
            try{
                const userEmail = getEmail();
                if (!userEmail){
                     console.log('No user logged in')
                     navigate('/login');
                }
                const response = await fetch(`/api/loadweights?user_id=${userEmail}&routineType=${routineType}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                });
                const savedWeight = await response.json();
                console.log('Saved weights:', savedWeight);
                const weightMap = savedWeight.reduce((acc, item) => {
                    acc[item.exercise] = item.weight;
                    return acc;
                }, {});
        
                setWeights(weightMap); // Set transformed weights object
            }catch (error){
                console.error('Error loading weights', error);
            } finally{
                setLoading(false);
            }
        };
    useEffect(() =>{
        loadWeight();
    }, [routineType]);

    useEffect(() => {
        if (!debounceWeights) return;
        const timer = setTimeout(async()=>{
            const {exercise, weight} = debounceWeights;
            try{
                const userEmail = getEmail();
                if (!userEmail){
                    console.log('No user logged in')
                    navigate('/login');
                }
                await fetch('/api/weights',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_id: userEmail,
                        routineType,
                        exercise,
                        weight
                    }),
                }); 
            }catch (error){
                console.error('Error saving weight', error);
            }
        }, 500); //500ms delay, send data 500ms after user stops typing

        return () => clearTimeout(timer);
    }, [debounceWeights]);
        
    const handleWeightChange = (exercise, value) => {
        setWeights ((prev) => ({
            ...prev,
            [exercise]: value,
        }));
        setDebounceWeights({exercise, weight: value});
    };

    return(
        <>
            {loading ? (
                <Box sx = {{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}>
                    <CircularProgress />
                </Box>
            ):(
        
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
            )}
        </>
    );
  }