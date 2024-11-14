import * as React from 'react';
import './Workouts.css';
import Navbar from '../../components/Navbar';
import WorkoutTable from '../../components/WorkoutTable';


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
const rows2 = [ 
    createData('Barbell Rows', 4, '8', ' '),
    createData('Lat Pulldowns', 4, '10',' '),
    createData('Face Pulls:', 3, 15,' '),
    createData('Single Arm Dubmell Rows', 3, '10 (Per Side)',' '),
    createData('EZ Bar Curls', 3,'6-8',' '),
    createData('Bayesian  Cable Curles', 2, 15, ' '),
];
const day4 = [
    createData('Deadlift', 4, 5, ' '),
    createData('Incline Dumbell Press', 3, 10, ' '),
    createData('Chinups', 3,10, ' '),
    createData('Bulgarian Split Squats', 3, '8 (per leg)', ' '),
    createData('Face Pulls', 3, 12, ''),
    createData('Plank', 3, 'AMRAP', '')
]
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
                            {rows1.map((row) =>(
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
                            {rows2.map((row) =>(
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