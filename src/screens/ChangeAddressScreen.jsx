import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, ScrollView, Button, useColorScheme, TouchableOpacity, Alert } from "react-native";
import { addAddress, addAddressByCoords, updateAddress, updateAddressByCoords } from "../store/actions/address.action";
import { useDispatch, useSelector } from "react-redux";
import * as Location from 'expo-location';
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../styles/constants/colors";
import styles from "../styles/styles";
import GenericInput from "../components/GenericInput";
import MapPreview from "../components/MapPreview";
import Address from "../models/Address";

const ChangeAddressScreen = ({ navigation, route }) => {
    const colorScheme = useColorScheme();
    const NewAddressScreen = colorScheme === "light" ? styles.NewAddressScreen : styles.NewAddressScreenDark;
    const IconColor = colorScheme === "light" ? colors.TAWNY : colors.PRINCETON_ORANGE;
    const item = route.params.item ? route.params.item : {};

    const [selectLocation, setSelectLocation] = useState(false);
    const [address, setAddress] = useState({...item, lat: "", lng:""});
    const dispatch = useDispatch();
    const [loading, setloading] = useState(true)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => !loading && (
                <TouchableOpacity onPress={handleSave} >
                    <Ionicons name="md-save-outline" color={IconColor} size={25} />
                </TouchableOpacity>
            )
        })
    }, [navigation, loading])

    useEffect(() => {
        if (address?.lat && address?.lng) {
            setloading(false)
        } else if (address?.street && address?.number && address?.city && address?.province && address?.country) {
            setloading(false)
        } else {
            setloading(true)
        }
    }, [address])

    const handleInputChange = (data) => {
        setAddress(prevAddress => ({...prevAddress, ...data}))
        setloading(true)
    };

    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            Alert.alert("insufficient permissions", "We don't have access to your location", [{ text: "OK" }])
            return false;
        }
        return true;
    }

    const handlePickOnMap = () => {
        const isLocationOk = verifyPermissions();
        if (!isLocationOk) return
        navigation.navigate("Map", item ? {location:{id:item.id, lat: item.lat, lng: item.lng}} : {});
    }

    const handleGetLocation = async () => {
        setAddress();
        setSelectLocation(true);
        const isLocationOk = verifyPermissions();
        if (!isLocationOk) return

        const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
        })

        setAddress({
            id: item?.id,
            lat: location.coords.latitude,
            lng: location.coords.longitude,
            userId: item?.userId,
        });
    }

    const handleSave = () => {
        if (address?.street && address?.number && address?.city && address?.province && address?.country) {
            dispatch(updateAddress({ ...address, userId: route?.params?.userId }))
        }
        else if (address?.lat && address?.lng) {
            dispatch(updateAddressByCoords({ ...address, userId: route?.params?.userId }));
        }
        navigation.navigate("AddressList");
    }

    const handleReturn = () => {
        setAddress({...item, lat: "", lng: ""});
        setSelectLocation(false);
    }

    return (
        <ScrollView style={NewAddressScreen}>
            {!selectLocation ? 
                <View style={styles.NewAddressScreenContainer}>
                    <View style={styles.NewAddressScreenButtonContainer}>
                        <Button title="Current location" color={colors.COCOA_BROWN} onPress={handleGetLocation} />
                        <Button title="Select location" color={colors.COCOA_BROWN} onPress={handlePickOnMap} />
                    </View>
                    <GenericInput label="Street * :" value={item.street} onInputChange={(text) => handleInputChange({ street: text })} />
                    <GenericInput label="Number * :" value={item.number} onInputChange={(text) => handleInputChange({ number: text })} />
                    <GenericInput label="Floor / Apartment :" value={item.floor} onInputChange={(text) => handleInputChange({ floor: text })} />
                    <GenericInput label="City * :" value={item.city} onInputChange={(text) => handleInputChange({ city: text })} />
                    <GenericInput label="Province * :" value={item.province} onInputChange={(text) => handleInputChange({ province: text })} />
                    <GenericInput label="Country * :" value={item.country} onInputChange={(text) => handleInputChange({ country: text })} />
                    <GenericInput label="Additional Information :" value={item.additionalInformation} onInputChange={(text) => handleInputChange({ additionalInformation: text })} />
                </View>
                :
                <View style={styles.NewAddressScreenContainer}>
                    <MapPreview style={styles.preview} location={item}>
                        <Text style={{ color: "white" }}>Searching...</Text>
                    </MapPreview>
                    <Button title="return" color={colors.COCOA_BROWN} onPress={handleReturn} />
                </View>
            }
        </ScrollView>
    )
}

export default ChangeAddressScreen;