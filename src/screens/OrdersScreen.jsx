import React, { useEffect } from "react";
import { View, Text, FlatList, useColorScheme } from "react-native";
import OrderItem from "../components/OrderItem";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../store/actions/order.action";
import styles from "../styles/styles";

const OrdersScreen = () => {
    const colorScheme = useColorScheme();
    const ordersScreen = colorScheme === "light" ? styles.ordersScreen : styles.ordersScreenDark;
    const ordersScreenNoOrder = colorScheme === "light" ? styles.ordersScreenNoOrder : styles.ordersScreenNoOrderDark;
    const ordersScreenNoOrderText = colorScheme === "light" ? styles.ordersScreenNoOrderText : styles.ordersScreenNoOrderTextDark;

    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);
    const user = useSelector(state => state.auth.user)

    useEffect(() => {
        dispatch(getOrders(user.id));
    }, [orders]);

    const renderOrderItem = ({ item }) => (
        <OrderItem orders={item} />
    )

    if (!orders.length) {
        return (
            <View style={ordersScreenNoOrder}>
                <Text style={ordersScreenNoOrderText}>No orders</Text>
            </View>
        )
    } else {
        return (
            <View style={ordersScreen}>
                <FlatList
                    data={orders}
                    keyExtractor={item => item.id}
                    renderItem={renderOrderItem}
                />
            </View>
        )
    }
}

export default OrdersScreen;