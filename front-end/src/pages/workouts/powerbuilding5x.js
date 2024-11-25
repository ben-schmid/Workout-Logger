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
    createData('Barbell Row', 5, '4-6', ''),
    createData('Incline Dumbbell Press', 3, 8, ''),
    createData('Lat Pulldown', 3, 10, ''),
    createData('Face Pulls', 3, 12, '')
];

const day2 = [
    createData('Squats', 5, '4-6', ''),
    createData('Deadlift', 3, 4, ''),
    createData('Leg Press', 3, 10, ''),
    createData('Calf Raises', 4, 15, ''),
    createData('Hanging Leg Raise (Core)', 3, 15, '')
];

const day3 = [
    createData('Overhead Shoulder Press', 4, 8, ''),
    createData('Dumbbell Lateral Raises', 4, 12, ''),
    createData('Skull Crushers', 3, 10, ''),
    createData('Barbell Curl', 3, 10, ''),
    createData('Cable Rope Hammer Curl', 3, 12, ''),
    createData('Tricep Rope Pushdown', 3, 12, '')
];

const day4 = [
    createData('Incline Bench Press', 4, '8-10', ''),
    createData('Seated Cable Row', 4, 10, ''),
    createData('Dumbbell Flys', 3, 12, ''),
    createData('Single Arm Dumbbell Row', 3, '10 (per arm)', ''),
    createData('Preacher Curl', 3, 12, ''),
    createData('Dumbbell Hammer Curl', 3, 12, '')
];

const day5 = [
    createData('Romanian Deadlift', 4, 8, ''),
    createData('Lunges', 3, '10 (per leg)', ''),
    createData('Leg Extensions', 3, 15, ''),
    createData('Hamstring Curls', 3, 15, ''),
    createData('Standing Calf Raises', 4, 20, '')
];

export default function Powerbuilding5x(){
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
                <h5>5X PER WEEK </h5>
                <h6> DAY 1: CHEST AND BACK (STRENGTH)</h6>
                <WorkoutTable data={day1} routineType="powerbuildingx5" />
                <h6> DAY 2: LOWER BODY (STRENGTH) </h6>
                <WorkoutTable data={day2} routineType="powerbuildingx5" />
                <h6> DAY 3: SHOULDERS AND ARMS (HYPERTROPHY) </h6>
                <WorkoutTable data={day3} routineType="powerbuildingx5" />
                <h6> DAY 4: UPPER BODY (HYPERTROPHY)</h6>
                <WorkoutTable data={day4} routineType="powerbuildingx5" />
                <h6> DAY 5: LOWER BODY (HYPERTROPHY)</h6>
                <WorkoutTable data={day5} routineType="powerbuildingx5" />

            </div> 
        </>
    );
}