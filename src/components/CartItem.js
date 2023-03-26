import React from "react";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/styles";
import { currencyFormat } from "../data/functions";

const CartItem = ({ item, onDelete, onDecrease, onIncrease }) => {
    const colorScheme = useColorScheme();
    const cartItemHeader = colorScheme === "light" ? styles.cartItemHeader : styles.cartItemHeaderDark;
    const cartItemText = colorScheme === "light" ? styles.cartItemText : styles.cartItemTextDark;
    return (
        <View style={styles.cartItem}>
            <View>
                <Text style={cartItemHeader}>{item.name}</Text>
            </View>
            <View style={styles.cartItemDetail}>
                <View>
                    <Text style={cartItemText} >Cantidad: {item.quantity}</Text>
                    <Text style={cartItemText} >{currencyFormat(item.price)}</Text>
                </View>
                <View>
                <TouchableOpacity onPress={() => onIncrease(item.id)}>
                    <Ionicons name="add-circle-outline" size={24} color="green"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="trash" size={24} color="red"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDecrease(item.id)}>
                    <Ionicons name="remove-circle-outline" size={24} color={colorScheme === "light" ? "black" : "white"}/>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CartItem;