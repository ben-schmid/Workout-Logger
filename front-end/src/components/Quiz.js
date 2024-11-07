
import React, { useState } from 'react';  // <-- Add this import statement
import Button from './Button.js'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



export default function RadioButtonsGroup() {




  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null); 

  const questions = [
    {
      text: "What are your current fitness goals?",
      options: [
        { id: 0, text: "Strength" },
        { id: 1, text: "Hypertrophy" },
        { id: 2, text: "Endurance" },
      ],
    },
    {
      text: "How many days per week would you like to train?",
      options: [
        { id: 0, text: "1-2" },
        { id: 1, text: "2-4" },
        { id: 2, text: "4+" },
      ],
    },
    {
      text: "Are you disabled?",
      options: [
        { id: 0, text: 'Yes'},
        { id: 1, text: 'No'}
      ],
    },
    {
      text: "hi?",
      options: [
        { id: 0, text: "1-2" },
        { id: 1, text: "2-4" },
        { id: 2, text: "4+" },
      ],
    },
  ];

  // Function to handle changing the question
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  const handlePrevQuestion = () => {
    if(currentQuestion > 0){
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Update selected option
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
        <p style={{color:'white', fontFamily: 'sans-serif'}}>{currentQuestion + 1} / {questions.length}</p>
        <Button 
        onPrev={handlePrevQuestion} 
        onNext={handleNextQuestion} 
        currentQuestion={currentQuestion} 
        totalQuestions={questions.length} 
        isNextDisabled={!selectedOption}/>
    </FormControl>
  );
}