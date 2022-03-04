import React from "react";
import { View, Text } from 'react-native';
import { Button } from '@mui/material';
import { ArrowBackIosNew } from "@mui/icons-material";


const EmployeeDetailsScreen = (props) => {

    return (
        <View>
            <Button variant="text" onClick={()=> {props.navigation.navigate('EmployeesList')}}>
                <ArrowBackIosNew></ArrowBackIosNew> Back
            </Button>
        </View>
    );
}

export default EmployeeDetailsScreen;