import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EmployeesListScreen from '../screens/EmployeesListScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import EmployeeDetailsScreen from '../screens/EmployeeDetailsScreen';
import SpaIcon from '@mui/icons-material/Spa';

const DrawerInstance = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <DrawerInstance.Navigator initialRouteName="EmployeList" screenOptions={{
            headerStyle: { elevation: 0 },
            cardStyle: { backgroundColor: '#00a656' }
        }}>
            <DrawerInstance.Screen 
                    name="EmployeeList" 
                    component={EmployeesListScreen} 
                    options={
                        {
                            headerRight: () => <SpaIcon sx={{mr:2}} fontSize="large" color="action"></SpaIcon>,
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