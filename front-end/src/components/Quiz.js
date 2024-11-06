import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <FormGroup className = 'quizboxes'>
      <FormControlLabel control={<Checkbox />} label="Label" className = 'box'/>
      <FormControlLabel control={<Checkbox />} label="Big balls" className = 'box' />
      <FormControlLabel control={<Checkbox />} label="Disabled" className = 'box' />
    </FormGroup>
  );
}