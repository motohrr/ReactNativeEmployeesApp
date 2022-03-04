import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button } from '@mui/material';

export default function ActionAreaCard({employee, navigation}) {
  return (
    <Card sx={{ my:5 }} margin="dense">
      <CardActionArea>
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
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" 
          onClick={() => {navigation.navigate('EmployeeDetails', {employee: employee})
        }}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
