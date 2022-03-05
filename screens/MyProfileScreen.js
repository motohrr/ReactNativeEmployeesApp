import { Button } from "@mui/material";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import BasicCard from "../components/BasicCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MyProfileScreen = ({navigation}) => {

    return (
        <ScrollView>
            <BasicCard></BasicCard>
            <Button color="primary" onClick={()=>{navigation.navigate('EmployeesList')}}><ArrowBackIcon/>Back</Button>
        </ScrollView>
    );
}

export default MyProfileScreen;