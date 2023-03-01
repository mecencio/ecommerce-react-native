import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/styles";

const ProductsItem = ({ item, onSelected }) => {

    function currencyFormat(num) {
        return '$ ' + num.toFixed(2).replace((/(\d)(?=(\d{3})+(?!\d))/g, '$ 1,'))
    }

    return (
        <View style={styles.productsItem}>
            <TouchableOpacity
                style={styles.productsItemContainer}
                onPress={() => onSelected(item)}
            >
                <View style={styles.productsImageContainer}>
                    <Image
                        style={styles.productsImage}
                        source={{ uri: item.img }}
                    />
                </View>
                <View style={styles.productsTextContainer}>
                    <Text style={styles.productsTextTitle}>{item.name}</Text>
                    <Text>{item.description}</Text>
                    <Text style={styles.productsTextPrice}>{currencyFormat(item.price)}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProductsItem;