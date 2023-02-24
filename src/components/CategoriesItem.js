import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "../styles/styles";

const CategoriesItem = ({item, onSelected }) => {
    return (
        <View style={styles.categoryItem}>
            <TouchableOpacity
                style={styles.categoryItemContainer}
                onPress={() => onSelected(item)}
            >
                <View style={styles.categoryItemImageContainer}>
                    <Image 
                        style={styles.categoryItemImage}
                        source={{uri: item.img}}
                    />
                </View>
                <View style={styles.categoryItemTextContainer}>
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoriesItem;