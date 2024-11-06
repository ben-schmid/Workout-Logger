import ProjectName from "../components/ProjectName";
import Quiz from "../components/Quiz";
import './Home.css';
export default function Home (){
    return(
        <>
            <ProjectName/>
            <h2>Home Page</h2>

            <h3>Quiz</h3>
            <p>lorem    </p>
            <div className = 'quiz-container'>
                <h2>How Fat Are You?</h2>
                <div className = 'quizboxes'> <Quiz/></div>
                   
            </div>
            
        </>
    )
}