import React, { useReducer, useState, useEffect, useCallback } from 'react';
import { Text, View, KeyboardAvoidingView, TouchableOpacity, Alert, Image, ImageBackground } from 'react-native';
import { useDispatch } from 'react-redux';
import { resetPassword, signin } from '../../store/actions/auth.action';
import InputEmail from '../../components/InputEmail';
import InputPassword from '../../components/InputPassword';
import styles from "../../styles/styles"

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
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }

        return {
            inputValues: updatedValues,
            inputValidities: updatedValidities,
            formIsValid: updatedFormIsValid,
        }
    }

    return state;
}

const LoginScreen = ({ navigation }) => {
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
            Alert.alert("Something went wrong", error, [{ text: "OK" }])
        }
    }, [error])

    const handleSignin = () => {
        if (formState.formIsValid) {
            dispatch(signin(formState.inputValues.email, formState.inputValues.password));
        } else {
            Alert.alert("Invalid Data", "Please check the email and password", [{ text: "OK" }])
        }
    }

    const handleResetPassword = () => {
        if (formState.formIsValid) {
            dispatch(resetPassword(formState.inputValues.email));
            Alert.alert("Email sent", "You will receive an email shortly with the steps to follow.", [{ text: "OK" }])
        } else {
            Alert.alert("Invalid email", "Check the email", [{ text: "OK" }])
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
        <ImageBackground style={styles.loginScreenBackground} source={{ uri: "https://elementary.ec/wp-content/uploads/2020/06/sitio-web-ecommerce.jpg" }} resizeMode="cover">
        <KeyboardAvoidingView behavior='height' style={styles.loginScreen}>
            <View style={styles.loginScreenImageContainer}>
                <Image source={require("../../../assets/images/logo/logo-low-resolution-no-background.png")} style={styles.loginScreenImage} />
            </View>
            <View style={styles.loginScreenContainer}>
                <Text style={styles.loginScreenTitle}>LOGIN</Text>
                <InputEmail
                    id="email"
                    label="Email"
                    keyboardType="email-address"
                    required
                    email={email}
                    autoCapitalize="none"
                    errorText="Please enter a valid email"
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
                    errorText="Please enter a valid password"
                    onInputChange={onInputChangeHandler}
                    initialValue=""
                />
                <TouchableOpacity style={styles.loginScreenButton} onPress={handleSignin}>
                    <Text style={styles.loginScreenText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleResetPassword} style={styles.loginScreenForgotPasswordContainer}>
                        <Text style={styles.loginScreenForgotPasswordText}>Forgot my password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginScreenSecondButton} onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.loginScreenSecondText}>Create account</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </ImageBackground>
    )
}

export default LoginScreen;