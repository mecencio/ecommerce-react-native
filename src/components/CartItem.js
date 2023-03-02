import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/styles";

const CartItem = ({ item, onDelete, onDecrease }) => {
    return (
        <View style={styles.cartItem}>
            <View>
                <Text style={styles.cartItemHeader}>{item.name}</Text>
            </View>
            <View style={styles.cartItemDetail}>
                <View>
                    <Text>Cantidad: {item.quantity}</Text>
                    <Text>$ {item.price}</Text>
                </View>
                <View>
                <TouchableOpacity>
                    <Ionicons name="add-circle-outline" size={24} color="green"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="trash" size={24} color="red"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDecrease(item.id)}>
                    <Ionicons name="remove-circle-outline" size={24} color="black"/>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CartItem;