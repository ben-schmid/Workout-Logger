import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Workouts.css';
import SiteLogo from '../../components/logo';
import Navbar from '../../components/Navbar';

const StyledTableContainer = styled(TableContainer)({
    width: 'auto',
    maxWidth: '400px',
    margin: '0 auto', 
    display: 'block',
        
});

function createData(exercise, sets, reps, weight){
    return { exercise, sets, reps, weight};
}

const rows1 = [ 
    createData('Bench Press', 4, '6-8', ' '),
    createData('Overhead Shoulder Press', 4, '6-8',' '),
    createData('Dumbell Incline Press:', 3, 10,' '),
    createData('Lateral Raises', 3, 12,' '),
    createData('Tricep Dips', 3,'8-10',' '),
    createData('Tricep Rope Pushdown', 3, 12, ' '),
];
export default function Pplx4(){
    return(
        <>
            <Navbar/>
            <div className="content-below-navbar">
                <StyledTableContainer component={Paper}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Exercise</TableCell>
                            <TableCell>Sets</TableCell>
                            <TableCell>Reps</TableCell>
                            <TableCell>Weight</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows1.map((row) =>(
                            <TableRow key = {row.exercise}>
                                <TableCell>{row.exercise}</TableCell>
                                <TableCell>{row.sets}</TableCell>
                                <TableCell>{row.reps}</TableCell>
                                <TableCell>{row.weight}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </StyledTableContainer>
            </div>
        
        </>
                    
    )
}