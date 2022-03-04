import React from "react";
import { ScrollView } from 'react-native';
import MediaCard from "../components/MediaCard";


const EmployeeDetailsScreen = ({route}) => {
    const employee = route.params.employee;
    return (
        <ScrollView>
            <MediaCard employee={employee}></MediaCard>
        </ScrollView>
    );
}

export default EmployeeDetailsScreen;