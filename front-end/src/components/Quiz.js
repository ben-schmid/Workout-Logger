
import React, { useState } from 'react';  // <-- Add this import statement
import Button from './Button.js'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { getEmail } from '../utils/localStorage.js';
import { useNavigate } from 'react-router-dom';

/* Template
{ 
      text: "",
      options: [
        { id: 0, text: "" },
        { id: 1, text: "" },
        { id: 2, text: "" },
        { id: 3, text: "" },
        { id: 4, text: "" },
        { id: 5, text: "" },
      ],
    },
}



the quizResults are sent as an array where quizResults[0] is the first question in the quiz and the value stored 
is the selected answer from the user

ex. what is your gender? this is quizResults[0]
if user selects male then quizResults[0] = 0
if user selects female,   quizResults[0] = 1
*/

export default function RadioButtonsGroup() {


  // useState 
  const [quizResults, setQuizResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const setSubmissionSuccess = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const questions = [
    {
      text: "What is your gender?",
      options: [
        { id: 0, text: "Male" },
        { id: 1, text: "Female" },
        { id: 2, text: "Other" },
      ],
    },
    {
      text: "How old are you?",
      options: [
        { id: 0, text: "Under 20" },
        { id: 1, text: "20-30" },
        { id: 2, text: "30-40" },
        { id: 3, text: "40-50" },
        { id: 4, text: "50-60" },
        { id: 5, text: "60+" },
      ],
    },
    {
      text: "Which best describes how you have trained the most to date?",
      options: [
        { id: 0, text: "Bodybuilding" },
        { id: 1, text: "Powerlifting" },
        { id: 2, text: "Crossfit" },
        { id: 3, text: "None of the above." },
      ],
    },
    {
      text: "How long can your training sessions be?",
      options: [
        { id: 0, text: "Less than an hour" },
        { id: 1, text: "An hour or more" },
      ],
    },
    {
      text: "What best matches your primary goal?",
      options: [
        { id: 0, text: "I mostly want to build muscle." },
        { id: 1, text: "I mostly want to gain strength." },
        { id: 2, text: "I want to gain muscle, but strength is important too" },
        { id: 3, text: "I want to build an even combination of muscle and strenght." },
      ],
    },
    {
      text: "How many years have you been consistently training?",
      options: [
        { id: 0, text: "Less than 1-2 years" },
        { id: 1, text: "2-5 years" },
        { id: 2, text: "5+ years" },
      ],
    },
    {
      text: "How many days/week can you train?",
      options: [
        { id: 0, text: "3" },
        { id: 1, text: "4" },
        { id: 2, text: "5" },
        { id: 3, text: "6" },
      ],
    },
  ];

  // Function to handle changing the question
  const handleNextQuestion = () => {
   
    // find the current selected option.Then update the quizResults array
    const selectedOptionId = questions[currentQuestion].options.find((option) => option.text === selectedOption)?.id;
    console.log('quizResults = ', selectedOptionId)
    if(selectedOptionId !== undefined){
      setQuizResults((prevResults) => { 
          const updatedResults = [...prevResults];
          updatedResults[currentQuestion] = selectedOptionId;
          return updatedResults;
        });
    
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      
      }
      else {
        submitQuiz();
      }
    }
  };

  const handlePrevQuestion = () => {
    if(currentQuestion > 0){
      quizResults[currentQuestion] = null;
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(
        questions[currentQuestion - 1].options.find((option) => option.id === quizResults[currentQuestion - 1]?.text || null)
      );
    }
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Update selected option
  };

  const submitQuiz = async() => {
    setIsSubmitting(true);
    try{
      const userEmail = getEmail();
      if (!userEmail){
        console.log('No user email found');
        navigate('/login');
      }
      const submissionData = { user_id: userEmail, quizResults };
      console.log('Submitting the following data:', JSON.stringify(submissionData, null, 2));
      const response = await fetch('/api/quiz',{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          
        },
        body: JSON.stringify({user_id: userEmail, quizResults})
      });
      if (response.ok){
        setSubmissionSuccess(true);
        const result = await response.json();
        console.log('Success submitting quiz', result)
        // navigate somewher here maybe  
      }else{
        const error = await response.json();
        console.log('Failed to send quiz:', error)
      }
    } catch (error){
      console.log('Error occured:', error);
    } finally {
      setIsSubmitting(false);
    }
    
  };


  // const submitResults = () => {
  //   if(currentQuestion === questions.length && )
  // }

  return (
    //<ThemeProvider theme={theme}>
    <FormControl>
     
      <FormLabel sx={{
        fontSize: "20px",
        //fontWeight: "bold",
        fontFamily: 'sans-serif',
        color: "white",
        marginTop: "40px", marginBottom:"40px",}}>
        {questions[currentQuestion].text}
      </FormLabel>
     
      <RadioGroup sx={{marginBottom: "40px", color: 'white', fontFamily:'sans-serif',}}
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={selectedOption}
        onChange={handleChange}
      >

        {questions[currentQuestion].options.map((option) => (
          <FormControlLabel
            key={option.id}
            value={option.text}
            control={<Radio sx={{fontFamily: 'sans-serif', color: 'white', '&-Mui-checked': {color: 'white',},}}/>}
            label={option.text}
          />
        ))}
      </RadioGroup>
        {isSubmitting ? 
          (<p style ={{color: 'white', fontFamily: 'sans-serif'}}>Submitting...</p>) 
          : 
          (<p  style={{color:'white', fontFamily: 'sans-serif'}}>{currentQuestion + 1} / {questions.length}</p>
        )}
        <Button 
        onPrev={handlePrevQuestion} 
        onNext={handleNextQuestion} 
        currentQuestion={currentQuestion} 
        totalQuestions={questions.length} 
        isNextDisabled={!selectedOption}/>
     
    </FormControl>
     
      
  );
};