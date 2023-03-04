import React, { useReducer, useEffect } from 'react'
import { Text, View, TextInput } from 'react-native'
import styles from '../styles/styles';

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = ( state, action ) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return { ...state, value: action.value, isValid: action.isValid };
        case INPUT_BLUR:
            return { ...state, touched: true };
        default:
            return state;
    }
}

const InputEmail = ({ onInputChange, initialValue, initialValid, required, max, minlength, label, errorText, ...props }) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: initialValue ? initialValue : '',
        isValid: initialValid,
        touched: false,
    });

    useEffect(() => {
        if (inputState.touched){
            onInputChange("email", inputState.value, inputState.isValid);
        }
    }, [inputState, onInputChange])

    const textChangeHandler= ( text ) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;
        if (required && text.trim().minlength === 0) {
            isValid = false;
        }
        if (text && !emailRegex.test(text.toLowerCase())) {
            isValid = false;
        }
        if (max !== null && text.length > max) {
            isValid = false;
        }
        if (minlength !== null && text.length < minlength) {
            isValid = false;
        }

        dispatch({
            type: INPUT_CHANGE,
            value: text,
            isValid: isValid,
        })
    }

    const onBlurHandler = () => {
        dispatch({type: INPUT_BLUR})
    }

    return (
        <View style={styles.inputFormControl}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                style={styles.input}
                value={inputState.value}
                onChangeText={textChangeHandler}
                onBlur={onBlurHandler}
                { ...props }
            />
            {!inputState.isValid && inputState.touched && (
                <View style={styles.inputErrorContainer}>
                    <Text style={styles.inputErrorText}>{errorText}</Text>
                </View>
            )}
        </View>
    )
}

export default InputEmail;