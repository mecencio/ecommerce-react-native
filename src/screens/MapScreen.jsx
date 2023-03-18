import React, { useLayoutEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from 'react-redux';
import { addAddressByCoords, updateAddressByCoords } from '../store/actions/address.action';

const MapScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const coords = route?.params?.location;
    const [selectedLocation, setSelectedLocation] = useState(coords && {
        lat: route.params.location.lat,
        lng: route.params.location.lng,
    });

    const initialRegion = route.params.location? {
        latitude: route.params.location.lat,
        longitude: route.params.location.lng,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05,
    } :{
        latitude: 55.67783187044066,
        longitude: 12.57032087275028,
        //latitude: 37.4226711,
        //longitude: -122.0849872,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const handleSelectedLocation = (event) => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude,
        })
    }

    const handleSaveLocation = () => {
        if (route.params.location && selectedLocation) {
            dispatch(updateAddressByCoords({ id:route?.params?.location?.id, ...selectedLocation, userId: route?.params?.userId }));
            navigation.navigate("AddressList")
        } else if (selectedLocation) {
            dispatch(addAddressByCoords({ ...selectedLocation, userId: route?.params?.userId }));
            navigation.navigate("AddressList")
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={handleSaveLocation}>
                    <Ionicons name="md-save-outline" color={"white"} size={25} />
                </TouchableOpacity>
            )
        })
    }, [navigation, handleSaveLocation])


    return (
        <View style={{ flex: 1 }}>
            <MapView initialRegion={initialRegion} style={{ flex: 1 }} onPress={handleSelectedLocation}>
                {selectedLocation && (
                    <Marker
                    title='You are here'
                    pinColor={'#FF9505'}
                    centerOffset={{
                        latitude: selectedLocation.lat,
                        longitude: selectedLocation.lng,
                    }}
                    coordinate={{
                        latitude: selectedLocation.lat,
                        longitude: selectedLocation.lng,
                    }}
                    />
                )}
            </MapView>
        </View>
    )
}

export default MapScreen;