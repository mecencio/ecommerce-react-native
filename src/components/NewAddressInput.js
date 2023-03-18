import React, { useState } from 'react'
import { Text, View, TextInput, useColorScheme } from 'react-native'
import styles from '../styles/styles';

const NewAddressInput = ({ label, value, onInputChange }) => {
    const colorScheme = useColorScheme();
    const NewAddressScreenLabel = colorScheme === "light" ? styles.NewAddressScreenLabel : styles.NewAddressScreenLabelDark;
    const NewAddressScreenInput = colorScheme === "light" ? styles.NewAddressScreenInput : styles.NewAddressScreenInputDark;
    const [ data, setData ] = useState(value)

    const handleTextChange = (text) => {
        onInputChange(text);
        setData(text);
    }

    return (
        <View style={styles.NewAddressScreenInputContainer}>
            <Text style={NewAddressScreenLabel}>{label}</Text>
            <TextInput value={data} style={NewAddressScreenInput} onChangeText={handleTextChange} />
        </View>
    )
}

export default NewAddressInput;