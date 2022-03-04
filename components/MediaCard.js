import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({employee}) {
  return (
    <Card sx={{mx:'auto', width: '90%', my:3}}>
      <CardMedia
        component="img"
        height="140"
        image={employee.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${employee.firstname} ${employee.lastname}`}
        </Typography>
        <Typography gutterBottom component="div" sx={{my:2}}>
          <b>Email:</b> {employee.email}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{my:2}}>
          <b>Address:</b> {`${employee.address.street} ,${employee.address.streetName} ,${employee.address.country} , ${employee.address.state}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{my:2}}>
          <b>website:</b> {employee.website}
        </Typography>
      </CardContent>

    </Card>
  );
}
