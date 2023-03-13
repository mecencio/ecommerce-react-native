import React from "react";
import { Text, TouchableOpacity, View, Image, useColorScheme } from "react-native";
import styles from "../styles/styles";

const CategoriesItem = ({item, onSelected }) => {
    const colorScheme = useColorScheme();
    const categoryItemText = colorScheme === "light" ? {} : styles.categoryItemTextDark;

    return (
        <View style={{}}>
            <TouchableOpacity
                style={styles.categoryItemContainer}
                onPress={() => onSelected(item)}
            >
                <View style={{}}>
                    <Image 
                        style={styles.categoryItemImage}
                        source={{uri: item.picture}}
                    />
                </View>
                <View>
                    <Text style={categoryItemText}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoriesItem;