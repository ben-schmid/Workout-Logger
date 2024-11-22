import * as React from 'react';
import './Workouts.css';
import Navbar from '../../components/Navbar';
import WorkoutTable from '../../components/WorkoutTable';
import SiteLogo from '../../components/logo';


function createData(exercise, sets, reps, weight){
    return { exercise, sets, reps, weight};
}

const day1 = [
    createData('Bench Press', 5, '4-6', ''),
    createData('Overhead Press', 4, 6, ''),
    createData('Close Grip Bench Press', 3, 8, ''),
    createData('Tricep Dips', 3, 8, '')
];

const day2 = [
    createData('Deadlift', 4, 4, ''),
    createData('Barbell Row', 4, 6, ''),
    createData('Pull-Ups', 3, 8, ''),
    createData('Face Pulls', 3, 12, ''),
    createData('Barbell Curl', 3, 10, '')
];

const day3 = [
    createData('Squats', 5, '4-6', ''),
    createData('Bulgarian Split Squats', 3, '8 (per leg)', ''),
    createData('Leg Press', 4, 10, ''),
    createData('Calf Raises', 4, 15, '')
];

const day4 = [
    createData('Dumbbell Incline Press', 4, '8-10', ''),
    createData('Seated Dumbbell Shoulder Press', 4, 10, ''),
    createData('Cable Flys', 3, 12, ''),
    createData('Lateral Raises', 4, 15, ''),
    createData('Tricep Rope Pushdown', 3, 12, '')
];

const day5 = [
    createData('Lat Pulldown', 4, 10, ''),
    createData('Seated Cable Row', 4, 12, ''),
    createData('Dumbbell Row', 3, '10 (per arm)', ''),
    createData('Preacher Curl', 3, 12, ''),
    createData('Hammer Curl', 3, 12, '')
];

const day6 = [
    createData('Romanian Deadlift', 4, 8, ''),
    createData('Lunges', 3, '10 (per leg)', ''),
    createData('Leg Extensions', 3, 15, ''),
    createData('Hamstring Curls', 3, 15, ''),
    createData('Standing Calf Raises', 4, 20, '')
];

export default function Powerbuilding6x(){
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
                <h2>6X PER WEEK </h2>
                <h3> DAY 1: PUSH  (STRENGTH)</h3>
                <WorkoutTable data={day1} routineType="powerbuilding6x" />
                <h3> DAY 2: PULL (STRENGTH) </h3>
                <WorkoutTable data={day2} routineType="powerbuilding6x" />
                <h3> DAY 3: LEGS (STRENGTH) </h3>
                <WorkoutTable data={day3} routineType="powerbuilding6x" />
                <h3> DAY 4: PUSH (HYPERTROPHY)</h3>
                <WorkoutTable data={day4} routineType="powerbuilding6x" />
                <h3> DAY 5: PULL (HYPERTROPHY)</h3>
                <WorkoutTable data={day5} routineType="powerbuilding6x" />
                <h3> DAY 6: LEGS (HYPERTROPHY)</h3>
                <WorkoutTable data={day6} routineType="powerbuilding6x" />

            </div> 
        </>
    );
}