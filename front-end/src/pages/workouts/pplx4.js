import * as React from 'react';
import { styled, createTheme} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Workouts.css';
import ProjectName from '../../components/ProjectName';
import Navbar from '../../components/Navbar';

const theme = createTheme({
    palette: {
        primary:{
            main: '#E0C2FF',
        },
    },
});

const StyledTableContainer = styled(TableContainer)({
    width: 'auto',
    maxWidth: '700px',
    margin: '0 auto', 
    display: 'block',
});

const StyledTableCell = styled(TableCell)(({theme}) =>({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.primary.main
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function createData(exercise, sets, reps, weight){
    return { exercise, sets, reps, weight};
}

const day1 = [ 
    createData('Bench Press', 4, '6-8', ' '),
    createData('Overhead Shoulder Press', 4, '6-8',' '),
    createData('Dumbell Incline Press:', 3, 10,' '),
    createData('Lateral Raises', 3, 12,' '),
    createData('Tricep Dips', 3,'8-10',' '),
    createData('Tricep Rope Pushdown', 3, 12, ' '),
];
const day2 = [ 
    createData('Barbell Rows', 4, '8', ' '),
    createData('Lat Pulldowns', 4, '10',' '),
    createData('Face Pulls:', 3, 15,' '),
    createData('Single Arm Dubmell Rows', 3, '10 (Per Side)',' '),
    createData('EZ Bar Curls', 3,'6-8',' '),
    createData('Bayesian  Cable Curles', 2, 15, ' '),
];

export default function Pplx4(){
    return(
        <>
            <Navbar/>
            <div className="content-below-navbar">
                <StyledTableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Exercise</StyledTableCell>
                                <StyledTableCell>Sets</StyledTableCell>
                                <StyledTableCell>Reps</StyledTableCell>
                                <StyledTableCell>Weight</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {day1.map((row) =>(
                                <StyledTableRow key = {row.exercise}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.exercise}
                                    </StyledTableCell>
                                    <StyledTableCell>{row.sets}</StyledTableCell>
                                    <StyledTableCell>{row.reps}</StyledTableCell>
                                    <StyledTableCell>{row.weight}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </StyledTableContainer>
                <StyledTableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Exercise</StyledTableCell>
                                <StyledTableCell>Sets</StyledTableCell>
                                <StyledTableCell>Reps</StyledTableCell>
                                <StyledTableCell>Weight</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {day2.map((row) =>(
                                <StyledTableRow key = {row.exercise}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.exercise}
                                    </StyledTableCell>
                                    <StyledTableCell>{row.sets}</StyledTableCell>
                                    <StyledTableCell>{row.reps}</StyledTableCell>
                                    <StyledTableCell>{row.weight}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </StyledTableContainer>
            </div>
        
        </>
                    
    )
}