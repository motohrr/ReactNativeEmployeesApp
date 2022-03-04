import React from "react";
import { ScrollView, Text , View} from "react-native";
import useFetch from "../hooks/useFetch";

const EmployeesListScreen = (props) => {

    const employees = useFetch('https://fakerapi.it/api/v1/persons')[0];

    if(employees){
        return (
            <ScrollView>
                {employees.map(r => <Button>{r}</Button>)}
            </ScrollView>
        );
    }else {
        return(
            <View>
                <Text>Jein</Text>
            </View>
        )
    }
}

export default EmployeesListScreen;