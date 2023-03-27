import React from "react";
import { Image, Button, Text, useWindowDimensions, ScrollView, useColorScheme } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/actions/cart.action";
import styles from "../styles/styles";
import colors from "../styles/constants/colors";
import { currencyFormat } from "../data/functions";
import Spinner from "../components/Spinner";

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
        dispatch(addItem(item, 1, route?.params?.userId));
    };

    if (!item) {
        return (
            <Spinner />
        )
    } else {
        return (
            <ScrollView style={{...detailScreenContainer, maxHeight: height *0.825}}>
                <Text style={detailScreenTitle}>{item.name}</Text>
                <Image style={{ height: height * 0.5, width: "100%" }} source={{ uri: item.image }} />
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