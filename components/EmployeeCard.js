import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

export default function EmployeeCard({employee, navigation}) {
  return (
        <Card>
          <Card.Title>{employee.firstname} {employee.lastname}</Card.Title>
          <Card.Divider></Card.Divider>
          <Text h5>
              <b>Email: </b><br></br>{employee.email}
          </Text>
          <Card.Divider></Card.Divider>
          <Text h5>
              <b>Address: </b><br></br>{`${employee.address.street}, ${employee.address.streetName}, ${employee.address.city}, ${employee.address.state}`}
          </Text>
          <Button
              icon={
                <Icon
                  name="arrow-forward"
                  color='rgba(78, 116, 289, 1)'
                  iconStyle={{ marginRight: 10 }}
                />
              }
              title="View Details"
              buttonStyle={{
                borderColor: 'rgba(78, 116, 289, 1)',
              }}
              type="outline"
              titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
              containerStyle={{
                marginVertical: 10,
              }}
              onPress={()=>{navigation.navigate('EmployeeDetails',{employee:employee})}}
            />
        </Card>
    );
}
