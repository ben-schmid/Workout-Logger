
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Image1 from './images/gain.jpg';
import Typography from '@mui/material/Typography';

export default function MediaCard() {

    return (
    <Card sx={{ maxWidth: 345, backgroundColor:"black", color:'white', borderRadius:'16px',}}>
      <CardMedia
        sx={{ height: 210 }}
        image={Image1}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nick
        </Typography>
        <Typography variant="body2" sx={{ color: 'white' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}