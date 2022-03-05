import React from "react";
import { ScrollView } from 'react-native';
import MediaCard from "../components/MediaCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from "@mui/material";

const EmployeeDetailsScreen = ({route, navigation}) => {
    const employee = route.params.employee;
    return (
        <ScrollView>
            <MediaCard employee={employee}></MediaCard>
            <Button color="primary" onClick={()=>{navigation.navigate('EmployeesList')}}><ArrowBackIcon/>Back</Button>
        </ScrollView>
    );
}

export default EmployeeDetailsScreen;