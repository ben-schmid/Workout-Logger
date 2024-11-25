import * as React from 'react';
import './Workouts.css';
import Navbar from '../../components/Navbar';
import WorkoutTable from '../../components/WorkoutTable';
import SiteLogo from '../../components/logo';


function createData(exercise, sets, reps, weight){
    return { exercise, sets, reps, weight};
}

const day1 = [
    createData('Squat', 5, 3, ''),
    createData('Pause Squat', 3, 4, ''),
    createData('Leg Press', 4, 8, ''),
    createData('Hanging Leg Raise', 3, 12, '')
];

const day2 = [
    createData('Bench Press', 5, 3, ''),
    createData('Close-Grip Bench Press', 3, 5, ''),
    createData('Dumbbell Row', 4, '10 (per arm)', ''),
    createData('Face Pulls', 3, 12, '')
];

const day3 = [
    createData('Deadlift', 5, 3, ''),
    createData('Block Pulls or Rack Pulls', 3, 5, ''),
    createData('Barbell Row', 4, 8, ''),
    createData('Plank', 3, '60 seconds', '')
];

const day4 = [
    createData('Squat', 4, 5, ''),
    createData('Bulgarian Split Squat', 3, '8 (per leg)', ''),
    createData('Leg Curl Machine', 4, 10, ''),
    createData('Calf Raises', 4, 15, '')
];

const day5 = [
    createData('Bench Press', 4, 5, ''),
    createData('Overhead Press', 3, 8, ''),
    createData('Pull-Ups', 4, 8, ''),
    createData('Tricep Rope Pushdown', 3, 12, '')
];

const day6 = [
    createData('Deadlift', 4, 5, ''),
    createData('Romanian Deadlift', 3, 8, ''),
    createData('Lunges', 3, '10 (per leg)', ''),
    createData('Cable Crunch', 3, 15, '')
];

export default function Powerlifting6x(){
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
                <h5>6X PER WEEK </h5>
                <h6> DAY 1: HEAVY SQUAT</h6>
                <WorkoutTable data={day1} routineType="powerlifting6x" />
                <h6> DAY 2: HEAVY BENCH </h6>
                <WorkoutTable data={day2} routineType="powerlifting6x"/>
                <h6> DAY 3: HEAVY DEADLIFT  </h6>
                <WorkoutTable data={day3} routineType="powerlifting6x" />
                <h6> DAY 4: TECHNIQUE SQUAT</h6>
                <WorkoutTable data={day4} routineType="powerlifting6x" />
                <h6> DAY 5: TECHNIQUE BENCH </h6>
                <WorkoutTable data={day5} routineType="powerlifting6x" />
                <h6> DAY 6: TECHNIQUE DEADLIFT </h6>
                <WorkoutTable data={day6} routineType="powerlifting6x" />
            </div> 
        </>
    );
}