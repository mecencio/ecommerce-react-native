import React, { useReducer, useState, useEffect, useCallback } from 'react';
import { Text, View, KeyboardAvoidingView, TouchableOpacity, Button, Alert, useColorScheme } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout, resetPassword, signin, signup } from '../store/actions/auth.action';
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
    const colorScheme = useColorScheme();

    const authScreen = colorScheme === 'light' ? styles.authScreen : styles.authScreenDark;
    const authScreenContainer = colorScheme === 'light' ? styles.authScreenContainer : styles.authScreenContainerDark;
    const authScreenTitle = colorScheme === 'light' ? styles.authScreenTitle : styles.authScreenTitleDark;
    const authScreenPrompt = colorScheme === 'light' ? styles.authScreenPrompt : styles.authScreenPromptDark;
    const authScreenButton = colorScheme === 'light' ? styles.authScreenButton : styles.authScreenButtonDark;
    const authScreenPromptButton = colorScheme === 'light' ? styles.authScreenPromptButton : styles.authScreenPromptButtonDark;

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

    const handleSignin = () => {
        if (formState.formIsValid) {
            dispatch(signin(formState.inputValues.email, formState.inputValues.password));
        } else {
            Alert.alert("Formulario Inválido", "Ingresa email y password válido", [{ text: "OK" }])
        }
    }

    const handleResetPassword = () => {
        if (formState.formIsValid) {
            dispatch(resetPassword(formState.inputValues.email));
            Alert.alert("Email enviado", "A la brevedad le llegará un mail con los pasos a seguir", [{ text: "OK" }])
        } else {
            Alert.alert("Email Inválido", "Ingrese un email válido", [{ text: "OK" }])
        }
    }

    const handleLogout = () => {
        dispatch(logout());
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
        <KeyboardAvoidingView behavior='height' style={authScreen}>
            <View style={authScreenContainer}>
                <Text style={authScreenTitle}>Registro</Text>
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
                <Button title='login' onPress={handleSignin} color={colorScheme === 'light' ? colors.RASPBERRY_ROSE : colors.SALMON_PINK} />
                <Button title='register' onPress={handleSignup} color={colorScheme === 'light' ? colors.CHOCOLATE_COSMOS : colors.SALMON_PINK} />
                <View style={authScreenPrompt}>
                    <TouchableOpacity onPress={handleResetPassword} style={authScreenButton}>
                        <Text style={authScreenPromptButton}>Olvidé mi contraseña</Text>
                    </TouchableOpacity>
                </View>
                <View style={authScreenPrompt}>
                    <TouchableOpacity onPress={handleLogout} style={authScreenButton}>
                        <Text style={authScreenPromptButton}>Salir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AuthScreen;