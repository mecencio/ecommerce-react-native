import React from "react";
import { Text, View, FlatList, TouchableOpacity, useColorScheme } from "react-native";
import CartItem from "../components/CartItem"
import { useSelector, useDispatch } from "react-redux";
import { removeItem, decreaseItem, confirmCart, increaseItem } from "../store/actions/cart.action";
import styles from "../styles/styles";
import { currencyFormat } from "../data/functions";

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

    const handleDeleteItem = (id) => {
        dispatch(removeItem(id));
    };

    const handleIncreaseItem = (id) => {
        dispatch(increaseItem(id));
    };

    const handleDecreaseItem = (id) => {
        dispatch(decreaseItem(id));
    };

    const handleConfirmCart = () => {
        dispatch(confirmCart(items, total));
    }

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
                        <TouchableOpacity style={cartScreenConfirm} onPress={() => console.log(items.length)}>
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