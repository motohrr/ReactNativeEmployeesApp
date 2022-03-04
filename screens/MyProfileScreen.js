import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import BasicCard from "../components/BasicCard";

const MyProfileScreen = (props) => {

    return (
        <ScrollView>
            <BasicCard></BasicCard>
        </ScrollView>
    );
}

export default MyProfileScreen;