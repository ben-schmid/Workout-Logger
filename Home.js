import React, {useEffect} from 'react';
import Quiz from "../components/Quiz";
import SiteLogo from "../components/logo";
import Logo from '../components/images/logo.png';
import './Home.css';

export default function Home (){

    

    useEffect(() => {
        window.scrollTo(0,0);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        // Cleanup the observer when the component unmounts
        return () => observer.disconnect();
    }, []);
   
    return(
        <>
            <nav class="navbar">
                <a href="/home">HOME</a>
                <a href="/lorum">VIEW WORKOUTS</a>
                <a href="">SIGN OUT</a>
            </nav>
            <section class = "hidden">
                <div className = 'title'>
                    <h1>Workout Generator </h1> <SiteLogo/>
                </div>
                    <h3>Get Off Your Ass</h3>
            </section>

            {/* <section class = "hidden">
                <div className = 'about-us'>
                </div>
            </section> */}

            <section class="hidden"></section>

            <section class = "hidden">
                <div className = 'info'>
                    <h2>What workout best suits you?</h2>
                    <p>Take our quiz below to find out.</p>
                </div>
            </section>

            <section class = "hidden">
                <div className = 'quiz-container'>
                    <Quiz/>
                </div>
            </section>
        </>
    );
}