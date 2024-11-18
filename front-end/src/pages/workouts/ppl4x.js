import * as React from 'react';
import './Workouts.css';
import Navbar from '../../components/Navbar';
import WorkoutTable from '../../components/WorkoutTable';
import SiteLogo from '../../components/logo';


function createData(exercise, sets, reps, weight){
    return { exercise, sets, reps, weight};
}

const day1 = [
    
    createData('Squats', 4, '6-8', ''),
    createData('Romanian Deadlifts', 4, 10,''),
    createData('Walking Lunges', 3, '10 (per leg)', ''),
    createData('Hamstring Curls', 3, 15, ''),
    createData('Calf Raises', 4, 15, ' ')
];
const day2 = [

    createData('Bench Press', 4, '6-8', ''),
    createData('Overhead Shoulder Press', 4, '6-8',''),
    createData('Dumbell Incline Press:', 3, 10,''),
    createData('Lateral Raises', 3, 12,''),
    createData('Tricep Dips', 3,'8-10',''),
    createData('Tricep Rope Pushdown', 3, 12, ''),
];
const day3 = [
    createData('Barbell Rows', 4, '8', ''),
    createData('Lat Pulldowns', 4, '10',''),
    createData('Face Pulls:', 3, 15,' '),
    createData('Single Arm Dubmell Rows', 3, '10 (per side)',''),
    createData('EZ Bar Curls', 3,'6-8',' '),
    createData('Bayesian  Cable Curles', 2, 15, ' '),
];
const day4 = [
    createData('Deadlift', 4, 5, ''),
    createData('Incline Dumbell Press', 3, 10, ''),
    createData('Chinups', 3,10, ''),
    createData('Bulgarian Split Squats', 3, '8 (per leg)', ''),
    createData('Face Pulls', 3, 12, ''),
];

export default function Ppl4x(){
    return(
        <>
            <Navbar/>
            <div className="content-below-navbar">
                
                <div className='title'>
                    <h1>PUSH PULL LEGS</h1> <SiteLogo/>
                </div>
                <h2>4X PER WEEK</h2>
                <h3> DAY 1: LEGS </h3>
                <WorkoutTable data={day1} routineType="ppl4x" />
                <h3> DAY 2: PUSH </h3>
                <WorkoutTable data={day2} routineType="ppl4x" />
                <h3> DAY 3: PULL </h3>
                <WorkoutTable data={day3} routineType="ppl4x" />
                <h3> DAY 4: FULL BODY </h3>
                <WorkoutTable data={day4} routineType="ppl4x" />
            </div> 
        </>
    );
}