import React, { useEffect } from "react";
import { FlatList } from "react-native";
import OrderItem from "../components/OrderItem";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../store/actions/order.action";

const OrdersScreen = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);

    useEffect(() => {
        dispatch(getOrders());
    }, []);

    const renderOrderItem = ({ item }) => (
        <OrderItem item={item} onDelete={() => console.log("On Delete")} /> 
    )

    return (
        <FlatList 
            data={orders}
            keyExtractor={item => item.id}
            renderItem={renderOrderItem}
        />
    )
}

export default OrdersScreen;