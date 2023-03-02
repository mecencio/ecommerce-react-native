import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import CartItem from "../components/CartItem"
import { useSelector, useDispatch } from "react-redux";
import { removeItem, decreaseItem } from "../store/actions/cart.action";
import styles from "../styles/styles";

const CartScreen = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);

    const handleDeleteItem = (id) => {
        dispatch(removeItem(id));
    };

    const handleDecreaseItem = (id) => {
        dispatch(decreaseItem(id));
    };

    const renderCartItem = ({ item }) => (
        <CartItem item={item} onDelete={handleDeleteItem} onDecrease={handleDecreaseItem} />
    );

    return (
        <View style={styles.cartScreenContainer}>
            <View style={styles.cartScreenList}>
                <FlatList
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={renderCartItem}
                />
            </View>
            <View style={styles.cartScreenFooter}>
                <TouchableOpacity style={styles.cartScreenConfirm}>
                    <Text>Confirmar</Text>
                    <View style={styles.cartScreenTotal}>
                        <Text style={styles.cartScreenText}>Total</Text>
                        <Text style={styles.cartScreenText}>$ {total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen;