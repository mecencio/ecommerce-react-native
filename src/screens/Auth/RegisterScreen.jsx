import React, { useReducer, useState, useEffect, useCallback } from 'react';
import { Text, View, KeyboardAvoidingView, Alert, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { signup } from '../../store/actions/auth.action';
import InputEmail from '../../components/InputEmail';
import InputPassword from '../../components/InputPassword';
import styles from "../../styles/styles";

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

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: { email: "", password: "", },
        inputValidities: { email: false, password: false, },
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
    }, [dispatchFormState])

    return (
        <ImageBackground style={styles.registerScreenBackground} source={{ uri: "https://elementary.ec/wp-content/uploads/2020/06/sitio-web-ecommerce.jpg" }} resizeMode="cover">
            <KeyboardAvoidingView behavior='height' style={styles.registerScreen}>
                <View style={styles.registerScreenImageContainer}>
                    <Image source={require("../../../assets/images/logo/logo-low-resolution-no-background.png")} style={styles.registerScreenImage} />
                </View>
                <View style={styles.registerScreenContainer}>
                    <Text style={styles.registerScreenTitle}>REGISTER</Text>
                    <InputEmail
                        id="email"
                        label="Email"
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
                        label="Password"
                        keyboardType="default"
                        required
                        password={password}
                        secureTextEntry
                        autoCapitalize="none"
                        errorText="Por favor ingresá una contraseña válida"
                        onInputChange={onInputChangeHandler}
                        initialValue=""
                    />
                    <TouchableOpacity style={styles.registerScreenButton} onPress={handleSignup}>
                        <Text style={styles.registerScreenText}>REGISTER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.registerScreenSecondButton} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.registerScreenSecondText}>I already have an account</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

export default RegisterScreen;