import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

export default function DetailCard({employee, navigation}) {
  return (
        <Card>
          <Card.Title>{employee.firstname} {employee.lastname}</Card.Title>
          <Card.Divider></Card.Divider>
          <Card.Image
              style={{ padding: 0 }}
              source={{
                uri:employee.image
              }}
          >
          </Card.Image>
          <Card.Divider></Card.Divider>
          <Text h5>
              <b>Email: </b><br></br>{employee.email}
          </Text>
          <Card.Divider></Card.Divider>
          <Text h5>
              <b>Address: </b><br></br>{`${employee.address.street}, ${employee.address.streetName}, ${employee.address.city}, ${employee.address.state}`}
          </Text>
          <Card.Divider></Card.Divider>
          <Text h5>
              <b>Phone: </b><br></br>{employee.phone}
          </Text>
          <Card.Divider></Card.Divider>
          <Text h5>
              <b>Gender: </b><br></br>{employee.gender}
          </Text>
          <Card.Divider></Card.Divider>
          <Text h5>
              <b>Birthday: </b><br></br>{employee.birthday}
          </Text>
          <Card.Divider></Card.Divider>
          <Text h5>
              <b>Website: </b><br></br><a href={employee.website}>{employee.website}</a>
          </Text>
        </Card>
    );
}
