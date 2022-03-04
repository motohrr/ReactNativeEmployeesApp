import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ width:"90%", my:2, mx:"auto"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Name
        </Typography>
        <Typography variant="h5" component="div">
          Carlos Alfredo Moto Herrera
        </Typography>
        <hr/>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Email:
        </Typography>
        <Typography variant="body2">
          cherreramoto555@gmail.com
        </Typography>
        <hr/>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          About me:
        </Typography>
        <Typography variant="body2">
          Im a software development, cat lover and usually spend my time watching movies and playing videogames.
        </Typography>
      </CardContent>
    </Card>
  );
}
