import * as React from 'react';
import './Workouts.css';
import Navbar from '../../components/Navbar';
import WorkoutTable from '../../components/WorkoutTable';
import SiteLogo from '../../components/logo';


function createData(exercise, sets, reps, weight){
    return { exercise, sets, reps, weight};
}

const day1 = [
    createData('Bench Press', 4, 8, ''),
    createData('Overhead Dumbbell Press', 4, 10, ''),
    createData('Incline Dumbbell Press', 3, 12, ''),
    createData('Lateral Raises', 4, 15, ''),
    createData('Skull Crushers', 3, 12, '')
];

const day2 = [
    createData('Deadlift', 4, 6, ''),
    createData('Pull-Ups (or Lat Pulldowns)', 4, 10, ''),
    createData('Barbell Row', 4, 10, ''),
    createData('Face Pulls', 3, 12, ''),
    createData('Dumbbell Curls', 3, 12, '')
];

const day3 = [
    createData('Squats', 4, 8, ''),
    createData('Leg Press', 3, 12, ''),
    createData('Lunges', 3, '10 (per leg)', ''),
    createData('Hamstring Curls', 4, 12, ''),
    createData('Calf Raises', 4, 20, '')
];

const day4 = [
    createData('Dumbbell Bench Press', 4, 10, ''),
    createData('Seated Shoulder Press Machine', 4, 12, ''),
    createData('Cable Flys', 3, 15, ''),
    createData('Dumbbell Lateral Raises', 4, 15, ''),
    createData('Tricep Rope Pushdown', 3, 12, '')
];

const day5 = [
    createData('T-Bar Row', 4, 10, ''),
    createData('Seated Cable Row', 4, 12, ''),
    createData('Lat Pulldown', 3, 12, ''),
    createData('Face Pulls', 3, 15, ''),
    createData('Hammer Curls', 3, 12, '')
];

const day6 = [
    createData('Romanian Deadlift', 4, 10, ''),
    createData('Bulgarian Split Squats', 3, '10 (per leg)', ''),
    createData('Leg Extensions', 3, 15, ''),
    createData('Hamstring Curl Machine', 3, 12, ''),
    createData('Standing Calf Raises', 4, 20, '')
];

export default function Bodybuilding6x(){
    return(
        <>
            <Navbar/>
            <div className="content-below-navbar">
                
                <div className='title'>
                    <h1>PURE BODYBUILDING</h1> <SiteLogo/>
                </div>
                <h2>6X PER WEEK: PUSH PULL LEGS SPLIT</h2>
                <h3> DAY 1: PUSH </h3>
                <WorkoutTable data={day1} routineType="bodybuilding6x" />
                <h3> DAY 2: PULL </h3>
                <WorkoutTable data={day2} routineType="bodybuilding6x" />
                <h3> DAY 3: LEGS </h3>
                <WorkoutTable data={day3} routineType="bodybuilding6x" />
                <h3> DAY 4: PUSH</h3>
                <WorkoutTable data={day4} routineType="bodybuilding6x" />
                <h3> DAY 5: PULL</h3>
                <WorkoutTable data={day5} routineType="bodybuilding6x" />
                <h3> DAY 6: LEGS</h3>
                <WorkoutTable data={day6} routineType="bodybuilding6x" />
            </div> 
        </>
    );
}