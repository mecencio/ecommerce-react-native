import React from 'react';
import { Text, View, Image, TouchableOpacity, useColorScheme } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/styles";
import { currencyFormat } from '../data/functions';

const formatDay = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
}

const OrderItem = ({ orders }) => {
    const colorScheme = useColorScheme();
    const orderItem = colorScheme === 'light' ? styles.orderItem : styles.orderItemDark;
    const orderItemDate = colorScheme === 'light' ? styles.orderItemDate : styles.orderItemDateDark;
    const orderItemHeader = colorScheme === 'light' ? styles.orderItemHeader : styles.orderItemHeaderDark;
    const orderItemText = colorScheme === 'light' ? styles.orderItemText : styles.orderItemTextDark;
    const orderItemTotal = colorScheme === 'light' ? styles.orderItemTotal : styles.orderItemTotalDark;

    return (
        <View style={orderItem}>
            <View>
                <Text style={orderItemDate}>Date: {formatDay(orders.date)}</Text>
                {orders.items.map(item => (
                    <View style={styles.orderItemContainer} key={orders.id + "/" + item.id}>
                        <View>
                            <Text style={orderItemHeader}>{item.name}</Text>
                        </View>
                        <View style={styles.orderItemDetail}>
                            <Image source={{ uri: item.image }} style={styles.orderItemImage} />
                            <View>
                                <Text style={orderItemText} >Cantidad: {item.quantity}</Text>
                                <Text style={orderItemText} >{currencyFormat(item.price)}</Text>
                            </View>
                        </View>
                    </View>
                ))
                }
                <Text style={orderItemTotal}>Total: {currencyFormat(orders.total)}</Text>
            </View>
        </View>
    )
}

export default OrderItem;