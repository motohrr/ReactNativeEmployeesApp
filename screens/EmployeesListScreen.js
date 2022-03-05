import React from "react";
import { ScrollView, StyleSheet, View} from "react-native";
import EmployeeCard from "../components/EmployeeCard";
import useFetch from "../hooks/useFetch";

const EmployeesListScreen = (props) => {

    const [data] = useFetch("https://fakerapi.it/api/v1/persons");

    return (
      <ScrollView>
        <View>
        {data &&
            data.map(employee => {
                return <EmployeeCard key={employee.id} employee={employee} navigation={props.navigation}></EmployeeCard>;
            })
        }
        </View>
      </ScrollView>
    );

}

const styles = StyleSheet.create({
    cardEmployee:{
        marginVertical: 20,
    }
})

export default EmployeesListScreen;