import React from "react";
import { ScrollView } from 'react-native';
import DetailCard from "../components/DetailCard";
import { Button, Icon } from "react-native-elements";

const EmployeeDetailsScreen = ({route, navigation}) => {
    const employee = route.params.employee;
    return (
        <ScrollView>
            <DetailCard employee={employee}></DetailCard>
            <Button
                icon={
                    <Icon
                    name="arrow-back"
                    color='rgba(78, 116, 289, 1)'
                    iconStyle={{ marginRight: 3 }}
                    />
                }
                containerStyle={{
                marginVertical: 10,
                }}
                title="Back"
                type="clear"
                titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                onPress={()=> {navigation.navigate('EmployeesList')}}
            />
        </ScrollView>
    );
}

export default EmployeeDetailsScreen;