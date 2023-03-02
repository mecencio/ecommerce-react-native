import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/styles";

const formatDay = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
}

const OrderItem = ({ item, onDelete }) => {
    return (
        <View style={styles.OrderItem}>
            <View>
                <Text style={styles.date}>{formatDay(item.date)}</Text>
                <Text style={styles.total}>Total</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => onDelete()}>
                    <Ionicons name="md-trash" color={"red"} size={22} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderItem;