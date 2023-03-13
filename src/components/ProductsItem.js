import React from "react";
import { Image, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import styles from "../styles/styles";

const ProductsItem = ({ item, onSelected }) => {
    const colorScheme = useColorScheme();
    const productsItemContainer = colorScheme === "light" ? styles.productsItemContainer : styles.productsItemContainerDark;
    const productsTextTitle = colorScheme === "light" ? styles.productsTextTitle : styles.productsTextTitleDark;
    const productsTextPrice = colorScheme === "light" ? styles.productsTextPrice : styles.productsTextPriceDark;
    const productsImage = colorScheme === "light" ? styles.productsImage : styles.productsImageDark;
    const currencyFormat = amount => {
        return "$ " + Number(amount)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };

    return (
        <View style={styles.productsItem}>
            <TouchableOpacity
                style={productsItemContainer}
                onPress={() => onSelected(item)}
            >
                <View style={styles.productsImageContainer}>
                    <Image
                        style={productsImage}
                        source={{ uri: item.img }}
                    />
                </View>
                <View style={styles.productsTextContainer}>
                    <Text style={productsTextTitle}>{item.name}</Text>
                    <Text style={productsTextPrice}>{item.price === null ? 0 : currencyFormat(item.price)}</Text>
                    <Text>{item.description}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProductsItem;