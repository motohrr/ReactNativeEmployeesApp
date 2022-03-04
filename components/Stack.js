import React, { Fragment } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmployeesListScreen from "../screens/EmployeesListScreen";
import EmployeeDetailsScreen from "../screens/EmployeeDetailsScreen";
import MyProfileScreen from "../screens/MyProfileScreen";

const StackInstance = createNativeStackNavigator();

const Stack = () => {
    return (
        <StackInstance.Navigator>
            <StackInstance.Screen component={EmployeesListScreen} name="EmployeesList" options={{title: 'Employees'}}/>
            <StackInstance.Screen component={EmployeeDetailsScreen} name="EmployeeDetails"/>
            <StackInstance.Screen component={MyProfileScreen} name="MyProfile"/>
        </StackInstance.Navigator>
    )
}

export default Stack;