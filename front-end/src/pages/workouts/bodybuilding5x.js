import * as React from 'react';
import './Workouts.css';
import Navbar from '../../components/Navbar';
import WorkoutTable from '../../components/WorkoutTable';
import SiteLogo from '../../components/logo';


function createData(exercise, sets, reps, weight){
    return { exercise, sets, reps, weight};
}

const day1 = [
    createData('Flat Bench Press', 4, '8-10', ''),
    createData('Incline Dumbbell Press', 4, 10, ''),
    createData('Chest Fly Machine', 3, 12, ''),
    createData('Cable Flys (High to Low)', 3, 15, ''),
    createData('Push-Ups (weighted, if possible)', 3, 'To failure', '')
];

const day2 = [
    createData('Deadlift', 4, 8, ''),
    createData('Lat Pulldown', 4, 10, ''),
    createData('Barbell Row', 4, 10, ''),
    createData('Seated Cable Row', 3, 12, ''),
    createData('Dumbbell Pullover', 3, 12, '')
];

const day3 = [
    createData('Overhead Shoulder Press', 4, '8-10', ''),
    createData('Dumbbell Lateral Raises', 4, 15, ''),
    createData('Face Pulls', 3, 12, ''),
    createData('Rear Delt Flys', 3, 15, ''),
    createData('Front Raises', 3, 12, '')
];

const day4 = [
    createData('Barbell Curl', 4, 10, ''),
    createData('Tricep Rope Pushdown', 4, 12, ''),
    createData('Dumbbell Hammer Curl', 3, 12, ''),
    createData('Skull Crushers', 3, 10, ''),
    createData('Preacher Curl', 3, 12, ''),
    createData('Overhead Dumbbell Extension', 3, 12, '')
];

const day5 = [
    createData('Squats', 4, 8, ''),
    createData('Leg Press', 4, 12, ''),
    createData('Hamstring Curl', 3, 15, ''),
    createData('Bulgarian Split Squats', 3, '10 (per leg)', ''),
    createData('Calf Raises (seated)', 4, 20, '')
];

export default function Bodybuildingx5(){
    return(
        <>
            <Navbar/>
            <div className="content-below-navbar">
                
                <div className='title'>
                    <h1>PURE BODY BUILDING</h1><SiteLogo/>
                </div>
                <h2>4X PER WEEK: UPPER LOWER</h2>
                <h3> DAY 1: CHEST </h3>
                <WorkoutTable data={day1} routineType="bodybuildingx5" />
                <h3> DAY 2: BACK </h3>
                <WorkoutTable data={day2} routineType="bodybuildingx5" />
                <h3> DAY 3: SHOULDERS </h3>
                <WorkoutTable data={day3} routineType="bodybuildingx5" />
                <h3> DAY 4: ARMS</h3>
                <WorkoutTable data={day4} routineType="bodybuildingx5" />
                <h3> DAY 5: LEGS</h3>
                <WorkoutTable data={day5} routineType="bodybuildingx5" />
            </div> 
        </>
    );
}