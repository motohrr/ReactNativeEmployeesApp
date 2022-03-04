import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ my:5 }} margin="dense">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography gutterBottom component="div" sx={{my:2}}>
            <b>Email:</b> {props.email}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{my:2}}>
            <b>Address:</b> {props.address}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{my:2}}>
            <b>website:</b> {props.website}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" 
        onClick={() => {props.navigation.navigate('EmployeeDetails')}}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
