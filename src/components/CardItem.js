import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/styles";

const CardItem = ({ item }) => {
    return (
        <View style={styles.CardItem}>
            <View>
                <Text>Card **** **** number</Text>
                <Text>Month / Year</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Ionicons name="md-trash" color={"red"} size={16} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CardItem;