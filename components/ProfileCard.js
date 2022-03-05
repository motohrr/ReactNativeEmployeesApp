import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

export default function ProfileCard() {
  return (
        <Card>
          <Card.Title>Carlos Alfredo Moto Herrera</Card.Title>
          <Card.Divider></Card.Divider>
          <Text h5>
              <b>Email: </b><br></br>cherreramoto555@gmail.com
          </Text>
          <Card.Divider></Card.Divider>
          <Text h5>
              <b>Birthdate: </b><br></br>01-April-1998
          </Text>
          <Card.Divider></Card.Divider>
          <Text h5>
              <b>About: </b> Im a software developer at DCCOLORWEB, a cat lover and i like spend time watching movies and series.
          </Text>
        </Card>
    );
}
