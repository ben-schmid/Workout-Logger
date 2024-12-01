import React, {useEffect, useState} from 'react';
import Quiz from "../components/Quiz";
import SiteLogo from "../components/logo";
import Navbar from "../components/Navbar"
import './Home.css';
import NumberFlow from '@number-flow/react';

export default function Home (){    

    const targetNum = 10_087;
    const duration = 10_000; //ms.

    const [count, setCount] = useState(0);

            useEffect(() => {
                const step = targetNum / (duration/100);
                const intervalId = setInterval(() => {
                setCount((prevCount) => {
                    const newCount = prevCount + step;
                    if(newCount >= targetNum){
                        clearInterval(intervalId);
                        return targetNum;
                    }
                    return newCount;
                });
            }, 100);
                return () => clearInterval(intervalId);
            }, [targetNum, duration]);
    
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
            <Navbar/>
            <section class = "hidden">
                <div className = 'title'>
                    <h1>Workout Logger </h1> <SiteLogo/>
                </div>
                    <h3>Track Your Progress, and Get Big</h3>
            </section>

            {/* <section class = "hidden">
                <div className = 'about-us'>
                </div>
            </section> */}

            <section class="hidden">

                <div className="p-12">
                    <h2>Over</h2>
                
                        <NumberFlow 
                            value={count}
                            className="text-4xl font-semibold"
                            format={{notation: 'standard'}}
                            locales={'en-US'}
                        />
                 
                    <h2>users have generated workouts.</h2>
                </div>
            </section>

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