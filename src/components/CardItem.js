import React from "react";
import { Text, View, TouchableOpacity, useColorScheme } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/styles";
import colors from "../styles/constants/colors";

const CardItem = ({ item, onDelete }) => {
    const colorScheme = useColorScheme();
    const cardItem = colorScheme === "light" ? styles.cardItem : styles.cardItemDark;
    const cardItemIcon = colorScheme === "light" ? styles.cardItemIcon : styles.cardItemIconDark;

    return (
        <View style={cardItem}>
            <View style={styles.cardItemContainer}>
            <Ionicons name="card-outline" size={24} style={cardItemIcon}/>
            <View>
                <Text>**** **** **** {item.number.substr(-4)}</Text>
                <Text>Expiration date:  {item.month} / {item.year}</Text>
            </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.cardItemOptionDelete} >
                    <Ionicons name="md-trash" color="red" size={16} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CardItem;