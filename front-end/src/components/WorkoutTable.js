import * as React from 'react';
import { styled, createTheme} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { TextField } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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

  export default function WorkoutTable( {data}){
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
                                    value={row.wheight}
                                />
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </StyledTableContainer>
    )
  }