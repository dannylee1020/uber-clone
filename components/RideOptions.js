import {
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    FlatList,
    Image,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "../slices/navSlice";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const data = [
    {
        id: "Uber-X-123",
        title: "Uber X",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    },
];

const RideOptions = () => {
    const destination = useSelector(selectDestination);
    const origin = useSelector(selectOrigin);
    const navigation = useNavigation();

    const [selected, setSelected] = useState(null);

    return (
        <SafeAreaView style={tw`flex-1 flex-grow bg-white`}>
            <View style={tw`bg-white flex-grow`}>
                <TouchableOpacity
                    style={tw`absolute top-3 left-5 p-3 rounded-full z-10`}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                <Text style={tw`text-center pt-5 pb-1 text-xl`}>
                    Select a Ride
                </Text>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={tw`flex-row items-center justify-between px-10 ${
                                item.id === selected?.id && "bg-gray-200"
                            }`}
                            onPress={() => {
                                setSelected(item);
                            }}
                        >
                            <Image
                                style={{
                                    width: 100,
                                    height: 100,
                                    resizeMode: "contain",
                                }}
                                source={{ uri: item.image }}
                            />
                            <View style={tw`-ml-6`}>
                                <Text style={tw`text-xl font-semibold`}>
                                    {item.title}
                                </Text>
                                <Text>Travel time...</Text>
                            </View>
                            <Text style={tw`text-xl`}>$99</Text>
                        </TouchableOpacity>
                    )}
                />
                <TouchableOpacity
                    disabled={!selected}
                    style={tw`bg-black py-2 mx-3 ${!selected && "bg-gray-300"}`}
                >
                    <Text style={tw`text-center text-white text-md`}>
                        Choose {selected?.title}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default RideOptions;
