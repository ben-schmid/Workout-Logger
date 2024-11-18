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
    createData('Plank', 3, 'Hold for 60 seconds', '')
];

const day4 = [
    createData('Squat (lighter weight, focus on form)', 4, 5, ''),
    createData('Bulgarian Split Squat', 3, '8 (per leg)', ''),
    createData('Leg Curl Machine', 4, 10, ''),
    createData('Calf Raises', 4, 15, '')
];

const day5 = [
    createData('Bench Press (lighter weight, focus on form)', 4, 5, ''),
    createData('Overhead Press', 3, 8, ''),
    createData('Pull-Ups', 4, 8, ''),
    createData('Tricep Rope Pushdown', 3, 12, '')
];

const day6 = [
    createData('Deadlift (lighter weight, focus on form)', 4, 5, ''),
    createData('Romanian Deadlift', 3, 8, ''),
    createData('Lunges', 3, '10 (per leg)', ''),
    createData('Cable Crunch', 3, 15, '')
];

export default function Powerlifting6x(){
    return(
        <>
            <Navbar/>
            <div className="content-below-navbar">
                <div className='title'>
                    <h1>POWER LIFTING</h1> <SiteLogo/>
                </div>
                <h2>6 PER WEEK </h2>
                <h3> DAY 1: HEAVY SQUAT</h3>
                <WorkoutTable data={day1} routineType="ppowerlifting6x" />
                <h3> DAY 2: HEAVY BENCH </h3>
                <WorkoutTable data={day2} routineType="powerlifting6x"/>
                <h3> DAY 3: HEAVY DEADLIFT  </h3>
                <WorkoutTable data={day3} routineType="powerlifting6x" />
                <h3> DAY 4: TECHNIQUE SQUAT</h3>
                <WorkoutTable data={day4} routineType="powerlifting6x" />
                <h3> DAY 5: TECHNIQUE BENCH </h3>
                <WorkoutTable data={day5} routineType="powerlifting6x" />
                <h3> DAY 6: TECHNIQUE DEADLIFT </h3>
                <WorkoutTable data={day6} routineType="powerlifting6x" />
            </div> 
        </>
    );
}