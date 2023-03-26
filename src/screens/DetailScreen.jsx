import React, { useEffect } from "react";
import { Image, Button, FlatList, Text, View, ActivityIndicator, useWindowDimensions, ScrollView, useColorScheme } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/actions/cart.action";
import styles from "../styles/styles";
import colors from "../styles/constants/colors";
import { currencyFormat } from "../data/functions";

const DetailsScreen = ({ navigation, route }) => {
    const colorScheme = useColorScheme();
    const detailScreenContainer = colorScheme === "light" ? styles.detailScreenContainer : styles.detailScreenContainerDark
    const detailScreenTitle = colorScheme === "light" ? styles.detailScreenTitle : styles.detailScreenTitleDark;
    const detailScreenPrice = colorScheme === "light" ? styles.detailScreenPrice : styles.detailScreenPriceDark;
    const detailScreenTitleDescription = colorScheme === "light" ? styles.detailScreenTitleDescription : styles.detailScreenTitleDescriptionDark;
    const detailScreenDescription = colorScheme === "light" ? styles.detailScreenDescription : styles.detailScreenDescriptionDark;
    const shipping = colorScheme === "light" ? styles.detailScreenShipping : styles.detailScreenShippingDark

    const dispatch = useDispatch();
    const item = useSelector(state => state.products.selected);

    const { width, height } = useWindowDimensions();

    const handleAddItem = () => {
        dispatch(addItem(item));
    };

    if (!item) {
        return (
            <View style={styles.productsScreenSpinner}>
                <ActivityIndicator size="large" color={colors.PRINCETON_ORANGE} />
            </View>
        )
    } else {
        return (
            <ScrollView style={detailScreenContainer}>
                <Text style={detailScreenTitle}>{item.name}</Text>
                <Image style={{ height: height * 0.5, width: "100%" }} source={{ uri: item.img }} />
                <Text style={detailScreenPrice}>{ currencyFormat(item.price) }</Text>
                { item.free_shipping && (
                        <Text style={shipping}>Free shipping</Text>
                    )}
                <Button title="Add to cart" color={colors.COCOA_BROWN} onPress={handleAddItem} />
                <Text style={detailScreenTitleDescription}> Description </Text>
                { !item.description && (<Text style={detailScreenDescription}>No description</Text>)}
                <Text style={detailScreenDescription}>{item.description}</Text>
            </ScrollView>
        )
    }
}

export default DetailsScreen;