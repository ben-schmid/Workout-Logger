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
    createData('Box Squat', 3, 5, ''),
    createData('Leg Press', 4, 8, ''),
    createData('Cable Crunch', 3, 15, '')
];

const day2 = [
    createData('Bench Press', 5, '3-5', ''),
    createData('Paused Bench Press', 3, 5, ''),
    createData('Overhead Press', 3, '6-8', ''),
    createData('Dumbbell Row', 4, '10 (per arm)', '')
];

const day3 = [
    createData('Deadlift', 5, '3-5', ''),
    createData('Rack Pulls', 3, 5, ''),
    createData('Barbell Row', 4, 8, ''),
    createData('Lat Pulldown', 3, 10, ''),
    createData('Plank', 3, '60 seconds', '')
];

const day4 = [
    createData('Incline Bench Press', 4, 6, ''),
    createData('Close-Grip Bench Press', 3, '6-8', ''),
    createData('Pull-Ups or Chin-Ups', 4, 8, ''),
    createData('Face Pulls', 3, 12, ''),
    createData('Tricep Dips', 3, 10, '')
];

const day5 = [
    createData('Front Squat', 4, 5, ''),
    createData('Romanian Deadlift', 3, 8, ''),
    createData('Lunges', 3, '10 (per leg)', ''),
    createData('Calf Raises', 4, 15, ''),
    createData('Hanging Leg Raise)', 3, 12, '')
];

export default function Powerlifting5x(){
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
                <h2>5X PER WEEK </h2>
                <h3> DAY 1: SQUAT FOCUS</h3>
                <WorkoutTable data={day1} routineType="powerlifting5x" />
                <h3> DAY 2: BENCH FOCUS </h3>
                <WorkoutTable data={day2} routineType="powerlifting5x"/>
                <h3> DAY 3: DEADLIFT FOCUS </h3>
                <WorkoutTable data={day3} routineType="powerlifting5x" />
                <h3> DAY 4: WEAK POINTS (UPPER BODY)</h3>
                <WorkoutTable data={day4} routineType="powerlifting5x" />
                <h3> DAY 5: WEAK POINTS (LOWER BODY)</h3>
                <WorkoutTable data={day5} routineType="powerlifting5x" />
                

            </div> 
        </>
    );
}