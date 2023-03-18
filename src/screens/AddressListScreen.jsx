import React, { useEffect } from "react";
import { FlatList, useColorScheme, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/styles";
import AddressItem from "../components/AddressItem";
import { deleteAddress, getAddresses } from "../store/actions/address.action";

const AddressListScreen = ({ navigation, route }) => {
    const colorScheme = useColorScheme();
    const addressListContainer = colorScheme === "light" ? styles.addressListScreen : styles.addressListScreenDark;
    const addressListScreenText = colorScheme === "light" ? styles.addressListScreenText : styles.addressListScreenTextDark;

    const dispatch = useDispatch();
    const addresses = useSelector(state => state.address.addresses);

    useEffect(() => {
        dispatch(getAddresses(route.params.userId));
    }, []);

    const handleDeleteAddress = (addressId) => {
        dispatch(deleteAddress(addressId));
    }

    const renderAddressItem = ({ item }) => (
        <AddressItem item={item} onDelete={handleDeleteAddress} navigation={navigation} />
    )

    return (
        <View style={addressListContainer}>
            <Text style={addressListScreenText}>ADRESSES</Text>
            <FlatList
                data={addresses}
                keyExtractor={item => item.id}
                renderItem={renderAddressItem}
            />
        </View>
    )
}

export default AddressListScreen;