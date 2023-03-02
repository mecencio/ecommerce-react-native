import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const CartItem = ({ item, onDelete, onDecrease }) => {
    return (
        <View>
            <View>
                <Text>{item.name}</Text>
            </View>
            <View>
                <View>
                    <Text>Cantidad: {item.quantity}</Text>
                    <Text>$ {item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="trash" size={24} color="red"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDecrease(item.id)}>
                    <Ionicons name="remove-circle-outline" size={24} color="red"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem;