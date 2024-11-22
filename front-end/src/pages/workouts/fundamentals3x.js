import * as React from 'react';
import './Workouts.css';
import Navbar from '../../components/Navbar';
import WorkoutTable from '../../components/WorkoutTable';
import SiteLogo from '../../components/logo';


function createData(exercise, sets, reps, weight){
    return { exercise, sets, reps, weight};
}

const day1 = [
    createData('Squat', 4, 5, ''),
    createData('Bench Press', 4, 5, ''),
    createData('Lat Pulldown', 3, '8-10', ''),
    createData('Dumbbell Lunges', 3, '10 (per leg)', ''),
    createData('Plank', 3, '60 Seconds', '')
];

const day2 = [
    createData('Deadlift', 4, 5, ''),
    createData('Overhead Press', 4, 5, ''),
    createData('Dumbbell Row', 3, '10 (per arm)', ''),
    createData('Leg Press', 3, 10, ''),
    createData('Cable Crunch', 3, 12, '')
];

const day3 = [
    createData('Squat)', 4, 5, ''),
    createData('Incline Dumbbell Bench Press', 3, 8, ''),
    createData('Seated Cable Row', 3, 10, ''),
    createData('Glute Bridge', 3, 12, ''),
    createData('Calf Raises', 4, 15, '')
];

export default function Fundamentals3x(){
    React.useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
    return(
        <>
            <Navbar/>
            <div className="content-below-navbar">
                <div className='title'>
                    <h1>FUNDAMENTALS</h1> <SiteLogo/>
                </div>
                <h2>3X PER WEEK: FULL BODY SPLIT</h2>
                <h3> DAY 1: FULL BODY </h3>
                <WorkoutTable data={day1} routineType="fundamentals3x" />
                <h3> DAY 2: FULL BODY</h3>
                <WorkoutTable data={day2} routineType="fundamentals3x" />
                <h3> DAY 3: FULL BODY </h3>
                <WorkoutTable data={day3} routineType="fundamentals3x" />
            </div>
        </>
    );
}