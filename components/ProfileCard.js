import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

export default function ProfileCard() {
  return (
        <Card>
          <Card.Title>Carlos Alfredo Moto Herrera</Card.Title>
          <Card.Divider></Card.Divider>
          <Text h5>
              Email: 
          </Text>
          <Text>cherreramoto555@gmail.com</Text>
          <Card.Divider></Card.Divider>
          <Text h5>
              Birthdate: 
          </Text>
          <Text>01-April-1998</Text>
          <Card.Divider></Card.Divider>
          <Text h5>
              About:  Im a software developer at DCCOLORWEB, a cat lover and i like spend time watching movies and series.
          </Text>
        </Card>
    );
}
