import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "../slices/navSlice";

const RideOptions = () => {
    const destination = useSelector(selectDestination);
    const origin = useSelector(selectOrigin);

    return (
        <View>
            <Text>RideOptions</Text>
            {/* <Text style={{ fontSize: 40 }}>{destination.location.lat}</Text>
            <Text style={{ fontSize: 40 }}>{origin.location.lat}</Text> */}
        </View>
    );
};

export default RideOptions;
