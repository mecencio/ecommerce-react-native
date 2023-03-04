import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/styles";
import AddressItem from "../components/AddressItem";
import { getAddresses } from "../store/actions/address.action";

const AddressListScreen = () => {
    const dispatch = useDispatch();
    const addresses = useSelector(state => state.address.addresses);

    useEffect(() => {
        dispatch(getAddresses());
    }, []);

    const renderAddressItem = ({ item }) => (
        <AddressItem item={item} />
    )

    return (
        <FlatList
            data={addresses}
            keyExtractor={item => item.id}
            renderItem={renderAddressItem}
        />
    )
}

export default AddressListScreen;