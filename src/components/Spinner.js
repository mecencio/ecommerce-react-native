import React from 'react'
import { View, ActivityIndicator, useColorScheme } from 'react-native'
import styles from "../styles/styles";
import colors from "../styles/constants/colors";

const Spinner = () => {
    const colorScheme = useColorScheme();
    const productsScreenSpinner = colorScheme === "light" ? styles.productsScreenSpinner : styles.productsScreenSpinnerDark;

    return (
        <View style={productsScreenSpinner}>
            <ActivityIndicator size="large" color={colors.PRINCETON_ORANGE} />
        </View>
    )
}

export default Spinner;