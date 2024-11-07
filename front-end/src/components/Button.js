import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function BasicButtons({ onPrev, onNext, currentQuestion, totalQuestions, isNextDisabled }) {
 
  return (
    <Stack spacing={53} direction="row">
        <Button 
          variant="contained" 
          disableRipple 
          onClick={onPrev} 
          disabled={currentQuestion === 0 } 
        >Back</Button>
        <Button 
        variant="contained"
         disableRipple 
         onClick={onNext} 
         disabled={isNextDisabled || currentQuestion === totalQuestions}
         >Next</Button>
    </Stack>
  );
}