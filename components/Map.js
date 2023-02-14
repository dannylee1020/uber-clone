import React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import tw from "twrnc";
import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { MAPS_API_KEY } from "@env";

const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);

    return (
        <MapView
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    destination={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    apikey={MAPS_API_KEY}
                    language="en"
                    strokeWidth={3}
                    strokeColor="black"
                />
            )}

            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                />
            )}
        </MapView>
    );
};

export default Map;
