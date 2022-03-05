import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import ProfileCard from "../components/ProfileCard";
import { Button, Icon } from "react-native-elements";

const MyProfileScreen = ({navigation}) => {

    return (
        <ScrollView>
            <ProfileCard></ProfileCard>
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

export default MyProfileScreen;