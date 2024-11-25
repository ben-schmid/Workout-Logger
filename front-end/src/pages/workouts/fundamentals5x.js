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
    createData('Incline Dumbbell Press', 3, 8, ''),
    createData('Dumbbell Flys', 3, 12, ''),
    createData('Push-Ups', 3, 'AMRAP', '')
];

const day2 = [
    createData('Deadlift', 4, 5, ''),
    createData('Lat Pulldown or Pull-Ups', 3, 10, ''),
    createData('Seated Cable Row', 3, 10, ''),
    createData('Face Pulls', 3, 12, '')
];

const day3 = [
    createData('Overhead Press', 4, 5, ''),
    createData('Dumbbell Lateral Raises', 3, 12, ''),
    createData('Face Pulls', 3, 15, ''),
    createData('Rear Delt Flys', 3, 15, '')
];

const day4 = [
    createData('Squat', 4, 5, ''),
    createData('Leg Press', 3, 10, ''),
    createData('Lunges', 3, '10 (per leg)', ''),
    createData('Calf Raises', 4, 15, ''),
    createData('Hanging Leg Raise (Core)', 3, 12, '')
];

const day5 = [
    createData('Barbell Curl', 3, 10, ''),
    createData('Tricep Rope Pushdown', 3, 12, ''),
    createData('Hammer Curls', 3, 12, '')
];

export default function Fundamentals5x(){
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
                <h5>5X PER WEEK: BODY PART SPLIT </h5>
                <h6> DAY 1: CHEST </h6>
                <WorkoutTable data={day1} routineType="fundamentals5x" />
                <h6> DAY 2: BACK</h6>
                <WorkoutTable data={day2} routineType="fundamentals5x" />
                <h6> DAY 3: SHOULDERS </h6>
                <WorkoutTable data={day3} routineType="fundamentals5x" />
                <h6> DAY 4: LEGS </h6>
                <WorkoutTable data={day4} routineType="fundamentals5x" />
                <h6> DAY 5: ARMS </h6>
                <WorkoutTable data={day5} routineType="fundamentals5x" />
            </div>
        </>
    );
}