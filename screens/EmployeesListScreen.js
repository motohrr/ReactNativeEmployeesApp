import React from "react";
import { ScrollView, StyleSheet} from "react-native";
import { Box, ThemeProvider } from '@mui/system';
import ActionAreaCard from "../components/ActionAreaCard";
import useFetch from "../hooks/useFetch";

const EmployeesListScreen = (props) => {

    const [data] = useFetch("https://fakerapi.it/api/v1/persons");

    return (
      <ScrollView>
        <Box sx={{ mx: "auto", width: '90%' }}>
        {data &&
            data.map(employee => {
                return <ActionAreaCard key={employee.id} employee={employee} navigation={props.navigation}></ActionAreaCard>;
            })
        }
        </Box>
      </ScrollView>
    );

}

const styles = StyleSheet.create({
    cardEmployee:{
        marginVertical: 20,
    }
})

export default EmployeesListScreen;