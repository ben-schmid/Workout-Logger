import * as React from 'react';
import './Workouts.css';
import Navbar from '../../components/Navbar';
import WorkoutTable from '../../components/WorkoutTable';
import SiteLogo from '../../components/logo';

function createData(exercise, sets, reps, weight){
    return { exercise, sets, reps, weight};
}

const day1 = [
    createData('Bench Press', 4, 5, ''),
    createData('Overhead Press', 4, 6, ''),
    createData('Dumbbell Shoulder Press', 3, 10, ''),
    createData('Skull Crushers', 3, 10, ''),
    createData('Tricep Dips', 3, 12, '')
];

const day2 = [
    createData('Deadlift', 4, 5, ''),
    createData('Pull-Ups', 4, 8, ''),
    createData('Barbell Row', 4, 8, ''),
    createData('Face Pulls', 3, 12, ''),
    createData('Barbell Curl', 3, 10, '')
];

const day3 = [
    createData('Squats', 4, 6, ''),
    createData('Lunges', 3, '10 (per leg)', ''),
    createData('Leg Press', 3, 12, ''),
    createData('Calf Raises', 4, 15, ''),
    createData('Romanian Deadlift', 4, 8, '')
];

const day4 = [
    createData('Dumbbell Bench Press', 4, '8-10', ''),
    createData('Incline Dumbbell Press', 3, 10, ''),
    createData('Lateral Raises', 4, 15, ''),
    createData('Cable Flys', 3, 12, ''),
    createData('Tricep Pushdown', 3, 12, '')
];

const day5 = [
    createData('Lat Pulldown', 4, 10, ''),
    createData('Seated Cable Row', 3, 10, ''),
    createData('Dumbbell Row', 3, 12, ''),
    createData('Hammer Curls', 3, 10, ''),
    createData('Preacher Curl', 3, 12, '')
];

const day6 = [
    createData('Leg Extensions', 4, 15, ''),
    createData('Hamstring Curls', 4, 15, ''),
    createData('Bulgarian Split Squats', 3, '10 (per leg)', ''),
    createData('Glute Bridges', 3, 12, ''),
    createData('Calf Raises', 4, 20, '')
];


export default function Ppl6x(){
    return(
        <>
            <Navbar/>
            <div className="content-below-navbar">
                
                <div className='title'>
                    <h1>PUSH PULL LEGS</h1> <SiteLogo/>
                </div>
                <h2>5X PER WEEK</h2>
                <h3> DAY 1: PUSH  </h3>
                <WorkoutTable data={day1} routineType="ppl6x" />
                <h3> DAY 2: PULL  </h3>
                <WorkoutTable data={day2} routineType="ppl6x" />
                <h3> DAY 3: LEGS </h3>
                <WorkoutTable data={day3} routineType="ppl6x" />
                <h3> DAY 4: PUSH  </h3>
                <WorkoutTable data={day4} routineType="ppl6x" />
                <h3> DAY 5: PULL </h3>
                <WorkoutTable data={day5} routineType="ppl6x" />
                <h3> DAY 6: LEGS </h3>
                <WorkoutTable data={day6} routineType="ppl6x" />
            </div> 
        </>
    );
}