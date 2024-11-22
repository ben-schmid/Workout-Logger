import * as React from 'react';
import './Workouts.css';
import Navbar from '../../components/Navbar';
import WorkoutTable from '../../components/WorkoutTable';
import SiteLogo from '../../components/logo';

function createData(exercise, sets, reps, weight){
    return { exercise, sets, reps, weight};
}

const day1 = [
    createData('Bench Press', 4, '6-8', ''),
    createData('Incline Dumbbell Press', 4, '8-10', ''),
    createData('Overhead Shoulder Press', 3, 10, ''),
    createData('Lateral Raises', 3, 15, ''),
    createData('Skull Crushers', 3, 10, ''),
    createData('Tricep Pushdown', 3, 12, '')
];

const day2 = [
    createData('Deadlift', 4, 5, ''),
    createData('Pull-Ups', 4, 8, ''),
    createData('Single Arm Dumbbell Row', 4, 10, ''),
    createData('Face Pulls', 3, 12, ''),
    createData('Seated Cable Rows', 3, 10, ''),
    createData('Bicep Curls', 3, 10, '')
];

const day3 = [
    createData('Squats', 4, '6-8', ''),
    createData('Romanian Deadlift', 4, '8-10', ''),
    createData('Leg Press', 3, 12, ''),
    createData('Leg Extensions', 3, 12, ''),
    createData('Hamstring Curl', 3, 12, ''),
    createData('Calf Raises', 4, 15, '')
];

const day4 = [
    createData('Incline Barbell Press', 4, 8, ''),
    createData('Seated Cable Row', 4, 10, ''),
    createData('Dumbbell Shoulder Press', 3, 10, ''),
    createData('Cable Flys', 3, 12, ''),
    createData('Face Pulls', 3, 15, ''),
    createData('Barbell Curl', 3, 10, '')
];

const day5 = [
    createData('Bulgarian Split Squats', 4, '10 (per leg)', ''),
    createData('Leg Extensions', 3, 15, ''),
    createData('Hamstring Curls', 4, 12, ''),
    createData('Glute Bridges', 3, 12, ''),
    createData('Calf Raises', 4, 20, ''),
    createData('Plank', 3, 'AMRAP', '')
];


export default function Ppl5x(){
    React.useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
    return(
        <>
            <Navbar/>
            <div className="content-below-navbar">
                
                <div className='title'>
                    <h1>PUSH PULL LEGS</h1> <SiteLogo/>
                </div>
                <h2>5X PER WEEK</h2>
                <h3> DAY 1: PUSH </h3>
                <WorkoutTable data={day1} routineType="ppl5x" />
                <h3> DAY 2: PULL </h3>
                <WorkoutTable data={day2} routineType="ppl5x" />
                <h3> DAY 3: LEGS </h3>
                <WorkoutTable data={day3} routineType="ppl5x" />
                <h3> DAY 4: UPPER BODY </h3>
                <WorkoutTable data={day4} routineType="ppl5x" />
                <h3> DAY 5: LOWER BODY </h3>
                <WorkoutTable data={day5} routineType="ppl5x" />
            </div> 
        </>
    );
}