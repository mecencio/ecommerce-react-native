import React, { useState } from 'react'
import { Text, View, TextInput, useColorScheme } from 'react-native'
import styles from '../styles/styles';

const GenericInput = ({ style, styleInput, label, value, onInputChange }) => {
    const colorScheme = useColorScheme();
    const genericInputLabel = colorScheme === "light" ? styles.genericInputLabel : styles.genericInputLabelDark;
    const genericInputInput = colorScheme === "light" ? styles.genericInputInput : styles.genericInputInputDark;
    const [ data, setData ] = useState(value)

    const handleTextChange = (text) => {
        onInputChange(text);
        setData(text);
    }

    return (
        <View style={styles.genericInputInputContainer}>
            <Text style={{...genericInputLabel, ...style}}>{label}</Text>
            <TextInput value={data} style={ styleInput ? styleInput : genericInputInput} onChangeText={handleTextChange} />
        </View>
    )
}

export default GenericInput;