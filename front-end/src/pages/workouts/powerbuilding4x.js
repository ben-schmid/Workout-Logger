import * as React from 'react';
import './Workouts.css';
import Navbar from '../../components/Navbar';
import WorkoutTable from '../../components/WorkoutTable';
import SiteLogo from '../../components/logo';


function createData(exercise, sets, reps, weight){
    return { exercise, sets, reps, weight};
}

const day1 = [
    createData('Bench Press', 4, '4-6', ''),
    createData('Barbell Row', 4, 6, ''),
    createData('Overhead Press', 3, 6, ''),
    createData('Pull-Ups', 3, 8, ''),
    createData('Skull Crushers', 3, 10, ''),
    createData('Dumbbell Curls', 3, 10, '')
];

const day2 = [
    createData('Squat', 4, '4-6', ''),
    createData('Deadlift', 4, 4, ''),
    createData('Bulgarian Split Squats', 3, '8 (per leg)', ''),
    createData('Leg Press', 3, 10, ''),
    createData('Calf Raises', 4, 15, '')
];

const day3 = [
    createData('Incline Dumbbell Press', 4, '8-10', ''),
    createData('Seated Cable Row', 4, 10, ''),
    createData('Lateral Raises', 4, 12, ''),
    createData('Face Pulls', 3, 12, ''),
    createData('Tricep Rope Pushdown', 3, 12, ''),
    createData('Preacher Curl', 3, 12, '')
];

const day4 = [
    createData('Romanian Deadlift', 4, 8, ''),
    createData('Lunges', 3, '10 (per leg)', ''),
    createData('Leg Extension', 3, 15, ''),
    createData('Hamstring Curl Machine', 3, 15, ''),
    createData('Calf Raises', 4, 20, ''),
    createData('Plank', 3, 'AMRAP', '')
];

export default function Powerbuilding4x(){
    React.useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
    return(
        <>
            <Navbar/>
            <div className="content-below-navbar">
                
                <div className='title'>
                    <h1>POWERBUILDING</h1> <SiteLogo/>
                </div>
                <h2>4X PER WEEK </h2>
                <h3> DAY 1: UPPER BODY STRENGTH </h3>
                <WorkoutTable data={day1} routineType="powerbuilding4x" />
                <h3> DAY 2: LOWER BODY STRENGTH</h3>
                <WorkoutTable data={day2} routineType="powerbuilding4x" />
                <h3> DAY 3: UPPER BODY HYPERTROPHY </h3>
                <WorkoutTable data={day3} routineType="powerbuilding4x" />
                <h3> DAY 4: LOWER BODY HYPERTROPHY</h3>
                <WorkoutTable data={day4} routineType="powerbuilding4x" />

            </div> 
        </>
    );
}