import * as React from 'react';
import './Workouts.css';
import Navbar from '../../components/Navbar';
import WorkoutTable from '../../components/WorkoutTable';
import SiteLogo from '../../components/logo';


function createData(exercise, sets, reps, weight){
    return { exercise, sets, reps, weight};
}

const day1 = [
    createData('Bench Press', 4, '8-10', ''),
    createData('Seated Cable Row', 4, 10, ''),
    createData('Dumbbell Shoulder Press', 3, 12, ''),
    createData('Dumbbell Incline Press', 3, 10, ''),
    createData('Lat Pulldown', 3, 12, ''),
    createData('Barbell Curl', 3, 10, ''),
    createData('Skull Crushers', 3, 12, '')
];

const day2 = [
    createData('Squats', 4, '8-10', ''),
    createData('Leg Press', 4, 12, ''),
    createData('Romanian Deadlift', 4, 10, ''),
    createData('Hamstring Curls', 3, 12, ''),
    createData('Leg Extensions', 3, 15, ''),
    createData('Calf Raises', 4, 20, '')
];

const day3 = [
    createData('Incline Dumbbell Press', 4, 10, ''),
    createData('T-Bar Row', 4, 10, ''),
    createData('Cable Lateral Raises', 3, 15, ''),
    createData('Pec Deck Machine', 3, 12, ''),
    createData('Dumbbell Pullover', 3, 12, ''),
    createData('Dumbbell Hammer Curls', 3, 10, ''),
    createData('Tricep Rope Pushdown', 3, 12, '')
];

const day4 = [
    createData('Deadlift', 4, 8, ''),
    createData('Lunges', 3, '10 (per leg)', ''),
    createData('Leg Curl Machine', 3, 15, ''),
    createData('Bulgarian Split Squats', 3, '10 (per leg)', ''),
    createData('Glute Bridges', 3, 12, ''),
    createData('Standing Calf Raises', 4, 20, '')
];

export default function Bodybuilding4x(){
    return(
        <>
            <Navbar/>
            <div className="content-below-navbar">
                
                <div className='title'>
                    <h1>PURE BODYBUILDING</h1> <SiteLogo/>
                </div>
                <h2>4X PER WEEK: UPPER LOWER</h2>
                <h3> DAY 1: UPPER BODY </h3>
                <WorkoutTable data={day1} routineType="bodybuilding4x" />
                <h3> DAY 2: LOWER BODY </h3>
                <WorkoutTable data={day2} routineType="bodybuilding4x" />
                <h3> DAY 3: UPPER BODY </h3>
                <WorkoutTable data={day3} routineType="bodybuilding4x" />
                <h3> DAY 4: LOWER BODY</h3>
                <WorkoutTable data={day4} routineType="bodybuilding4x" />
            </div> 
        </>
    );
}