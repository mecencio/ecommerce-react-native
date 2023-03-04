import React, { useReducer, useState, useEffect, useCallback } from 'react';
import { Text, View, KeyboardAvoidingView, TouchableOpacity, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { signup } from '../store/actions/auth.action';
import InputEmail from '../components/InputEmail';
import InputPassword from '../components/InputPassword';
import colors from '../styles/constants/colors';
import styles from "../styles/styles"

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value,
        }
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid,
        }

        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid || updatedValidities[key];
        }

        return {
            inputValues: updatedValues,
            inputValidities: updatedValidities,
            formIsValid: updatedFormIsValid,
        }
    }

    return state;
}

const AuthScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const [ formState, dispatchFormState ] = useReducer(formReducer, {
        inputValues: {
            email: "",
            password: "",
        },
        inputValidities: {
            email: false,
            password: false,
        },
        formIsValid: false,
    });

    useEffect(() => {
        if (error) {
            Alert.alert("Ha ocurrido un error", error, [{ text: "OK" }])
        }
    }, [error])


    const handleSignup = () => {
        if (formState.formIsValid) {
            dispatch(signup(formState.inputValues.email, formState.inputValues.password));
        } else {
            Alert.alert("Formulario Inválido", "Ingresa email y password válido", [{ text: "OK" }]);
        }
    }

    const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier,
        })
    }, [dispatchFormState] )

    return (
        <KeyboardAvoidingView behavior='height' style={styles.authScreen}>
            <View style={styles.authScreenContainer}>
                <Text style={styles.authScreenTitle}>Registro</Text>
                <InputEmail
                    id="email"
                    label="email"
                    keyboardType="email-address"
                    required
                    email={email}
                    autoCapitalize="none"
                    errorText="Por favor ingresá un email válido"
                    onInputChange={onInputChangeHandler}
                    initialValue=""
                    initialValid={false}
                />
                <InputPassword
                    id="password"
                    label="password"
                    keyboardType="default"
                    required
                    password={password}
                    secureTextEntry
                    autoCapitalize="none"
                    errorText="Por favor ingresá una contraseña válida"
                    onInputChange={onInputChangeHandler}
                    initialValue=""
                />
                <Button title='register' onPress={handleSignup} color={colors.primary} />
                <View style={styles.authScreenPrompt}>
                    <TouchableOpacity onPress={() => console.log("Ingresar")} style={styles.authScreenButton}>
                        <Text style={styles.authScreenPromptButton}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AuthScreen;