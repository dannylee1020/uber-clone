import { FlatList, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import tw from "twrnc";
import {
    selectOrigin,
    selectDestination,
    setOrigin,
    setDestination,
} from "../slices/navSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

const data = [
    {
        id: "123",
        icon: "home",
        name: "Home",
        location: {
            lat: 33.97564163287177,
            lng: -118.41928458822663,
        },
        destination: "Playa Vista, Los Angeles",
    },
    {
        id: "456",
        icon: "briefcase",
        name: "Work",
        location: {
            lat: 34.03038505798036,
            lng: -118.46706527296323,
        },
        destination: "Red Bull North America, Los Angeles",
    },
];

const NavFavorites = () => {
    const dispatch = useDispatch();
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
            )}
            s
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={tw`flex-row items-center p-5`}
                    onPress={() => {
                        if (!origin) {
                            dispatch(
                                setOrigin({
                                    location: item.location,
                                    destination: item.destination,
                                })
                            );
                        }

                        if (origin && !destination) {
                            dispatch(
                                setDestination({
                                    location: item.location,
                                    destination: item.destination,
                                })
                            );
                        }

                        if (route.name === "HomeScreen") {
                            navigation.navigate("MapScreen");
                        } else {
                            navigation.navigate("RideOptions");
                        }
                    }}
                >
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={item.icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>
                            {item.name}
                        </Text>
                        <Text style={tw`text-gray-500`}>
                            {item.destination}
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavFavorites;
