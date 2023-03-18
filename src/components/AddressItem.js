import React from "react";
import { Text, View, TouchableOpacity, useColorScheme } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/styles";

const AddressItem = ({ item, onDelete, navigation }) => {
    const colorScheme = useColorScheme();
    const AddressItem = colorScheme === "light" ? styles.AddressItem : styles.AddressItemDark;

    return (
        <View style={AddressItem} >
            <View>
                <Text>{item.street} {item.number}</Text>
                <Text>{item.city} - {item.province}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Change Address", {item})} style={styles.AddressItemOptionEdit} >
                    <Ionicons name="pencil-outline" size={16} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.AddressItemOptionDelete} >
                    <Ionicons name="md-trash" color="red" size={16} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddressItem;