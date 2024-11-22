import * as React from 'react';
import './Workouts.css';
import Navbar from '../../components/Navbar';
import WorkoutTable from '../../components/WorkoutTable';
import SiteLogo from '../../components/logo';


function createData(exercise, sets, reps, weight){
    return { exercise, sets, reps, weight};
}

const day1 = [
    createData('Squat', 5, '3-5', ''),
    createData('Pause Squat', 3, 5, ''),
    createData('Leg Press', 4, 8, ''),
    createData('Hanging Leg Raise', 3, 12, '')
];

const day2 = [
    createData('Bench Press', 5, '3-5', ''),
    createData('Close-Grip Bench Press', 3, 6, ''),
    createData('Overhead Press', 3, '6-8', ''),
    createData('Dumbbell Row', 3, '8 (per arm)', ''),
    createData('Face Pulls', 3, 12, '')
];

const day3 = [
    createData('Deadlift', 5, '3-5', ''),
    createData('Romanian Deadlift', 3, 5, ''),
    createData('Barbell Row', 3, 8, ''),
    createData('Lat Pulldown', 3, 10, ''),
    createData('Plank', 3, '60 seconds', '')
];

const day4 = [
    createData('Front Squat', 3, 6, ''),
    createData('Incline Bench Press', 3, 6, ''),
    createData('Good Mornings', 3, 8, ''),
    createData('Pull-Ups', 3, '8-10', ''),
    createData('Calf Raises', 4, 15, '')
];

export default function Powerlifting4x(){
    React.useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
    return(
        <>
            <Navbar/>
            <div className="content-below-navbar">
                
                <div className='title'>
                    <h1>POWERLIFTING</h1> <SiteLogo/>
                </div>
                <h2>4X PER WEEK </h2>
                <h3> DAY 1: SQUAT FOCUS</h3>
                <WorkoutTable data={day1} routineType="powerlifting4x" />
                <h3> DAY 2: BENCH PRESS FOCUS </h3>
                <WorkoutTable data={day2} routineType="powerlifting4x" />
                <h3> DAY 3: DEADLIFT FOCUS </h3>
                <WorkoutTable data={day3} routineType="powerlifting4x" />
                <h3> DAY 4: ACCESSORY/WEAK POINTS</h3>
                <WorkoutTable data={day4} routineType="powerlifting4x" />
                

            </div> 
        </>
    );
}