import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

export default function DetailCard({employee}) {
  return (
        <Card>
          <Card.Title><Text h3>{employee.firstname} {employee.lastname}</Text></Card.Title>
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
              Email: 
          </Text>
          <Text>{employee.email}</Text>
          <Card.Divider></Card.Divider>
          <Text h5>
              Address: 
          </Text>
          <Text>{`${employee.address.street}, ${employee.address.streetName}, ${employee.address.city}, ${employee.address.state}`}</Text>
          <Card.Divider></Card.Divider>
          <Text h5>
              Phone: 
          </Text>
          <Text>{employee.phone}</Text>
          <Card.Divider></Card.Divider>
          <Text h5>
              Gender: 
          </Text>
          <Text>{employee.gender}</Text>
          <Card.Divider></Card.Divider>
          <Text h5>
              Birthday: 
          </Text>
          <Text>{employee.birthday}</Text>
          <Card.Divider></Card.Divider>
          <Text h5>
              Website: {employee.website}
          </Text>
        </Card>
    );
}
