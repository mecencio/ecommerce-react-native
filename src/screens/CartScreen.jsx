import React from "react";
import { Text, View, FlatList, TouchableOpacity, useColorScheme } from "react-native";
import CartItem from "../components/CartItem"
import { useSelector, useDispatch } from "react-redux";
import { removeItem, decreaseItem, confirmCart, increaseItem, getCart } from "../store/actions/cart.action";
import styles from "../styles/styles";
import { currencyFormat } from "../data/functions";
import { useEffect } from "react";
import { getOrders } from "../store/actions/order.action";

const CartScreen = () => {
    const colorScheme = useColorScheme();
    const cartScreenContainer = colorScheme === "light" ? styles.cartScreenContainer : styles.cartScreenContainerDark;
    const cartScreenEmptyCart = colorScheme === "light" ? styles.cartScreenEmptyCart : styles.cartScreenEmptyCartDark;
    const cartScreenEmptyCartText = colorScheme === "light" ? styles.cartScreenEmptyCartText : styles.cartScreenEmptyCartTextDark;
    const cartScreenFooter = colorScheme === "light" ? styles.cartScreenFooter : styles.cartScreenFooterDark;
    const cartScreenConfirm = colorScheme === "light" ? styles.cartScreenConfirm : styles.cartScreenConfirmDark;
    const cartScreenText = colorScheme === "light" ? styles.cartScreenText : styles.cartScreenTextDark;
    const cartScreenTextConfirm = colorScheme === "light" ? styles.cartScreenTextConfirm : styles.cartScreenTextConfirmDark;

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);
    const user = useSelector(state => state.auth.user);

    const handleDeleteItem = (productId) => {
        dispatch(removeItem(productId, user.id));
    };

    const handleIncreaseItem = (product) => {
        dispatch(increaseItem(product, user.id));
    };

    const handleDecreaseItem = (product) => {
        dispatch(decreaseItem(product, user.id));
    };

    const handleConfirmCart = () => {
        dispatch(confirmCart(items, total, user.id));
        dispatch(getOrders(user.id));
    }

    useEffect(() => {
        dispatch(getCart(user.id))
    }, [])

    const renderCartItem = ({ item }) => (
        <CartItem item={item} onDelete={handleDeleteItem} onDecrease={handleDecreaseItem} onIncrease={handleIncreaseItem} />
    );

    return (
        items.length === 0 ?
            (
                <View style={cartScreenEmptyCart}>
                    <Text style={cartScreenEmptyCartText} >Empty Cart</Text>
                </View>
            )
            : (
                <View style={cartScreenContainer}>
                    <View style={styles.cartScreenList}>
                        <FlatList
                            data={items}
                            keyExtractor={item => item.id}
                            renderItem={renderCartItem}
                        />
                    </View>
                    <View style={cartScreenFooter}>
                        <TouchableOpacity style={cartScreenConfirm} onPress={handleConfirmCart}>
                            <Text style={cartScreenTextConfirm} >Confirmar</Text>
                            <View style={styles.cartScreenTotal}>
                                <Text style={cartScreenText}>Total</Text>
                                <Text style={cartScreenText}>{currencyFormat(total)}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )
    )
}

export default CartScreen;