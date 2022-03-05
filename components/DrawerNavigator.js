import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EmployeesListScreen from '../screens/EmployeesListScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import EmployeeDetailsScreen from '../screens/EmployeeDetailsScreen';
import { Icon } from 'react-native-elements';

const DrawerInstance = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {
    return(
        <DrawerInstance.Navigator initialRouteName="EmployeeList" screenOptions={{
            headerStyle: { elevation: 0 },
            cardStyle: { backgroundColor: '#00a656' }
        }}>
            <DrawerInstance.Screen 
                    name="EmployeesList" 
                    component={EmployeesListScreen} 
                    options={
                        {
                            drawerIcon: () => <Icon reverse name="person"></Icon>,
                            headerRight: ()=> <Icon raised color= '#145214' name='eco'/>,
                            title: "Employees",
                            headerStyle: {
                                backgroundColor: '#00a656',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                            fontWeight: 'bold',
                            },
                        }
                    }/>
            <DrawerInstance.Screen name="MyProfile" component={MyProfileScreen} 
             options={
                {
                    drawerIcon: () => <Icon reverse name="portrait"></Icon>,
                    title: 'My Profile',
                    headerStyle: {
                        backgroundColor: '#00a656',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    },
                }
            }/>
            <DrawerInstance.Screen name="EmployeeDetails" component={EmployeeDetailsScreen} 
             options={{
                drawerLabel: () => null,
                title: 'Details',
                drawerIcon: () => null,
                headerStyle: {
                    backgroundColor: '#00a656',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
            }}
            />
        </DrawerInstance.Navigator>
    );
}

export default DrawerNavigator;