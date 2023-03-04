import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/styles";

const AddressItem = ({ item }) => {
    return (
        <View style={styles.AddressItem} >
            <View>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => console.log("Editar")} style={styles.AddressItemOptionEdit} >
                    <Ionicons name="pencil-outline" size={16} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Borrar")} style={styles.AddressItemOptionDelete} >
                    <Ionicons name="md-trash" color="red" size={16} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddressItem;