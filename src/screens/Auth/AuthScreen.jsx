import React from 'react';
import { View, KeyboardAvoidingView, Image, ImageBackground, Text, TouchableOpacity, useColorScheme } from 'react-native';
import styles from "../../styles/styles";

const AuthScreen = ({ navigation }) => {
    const colorScheme = useColorScheme();
    const authScreenButton = colorScheme === "light" ? styles.authScreenButton : styles.authScreenButtonDark;
    const authScreenText = colorScheme === "light" ? styles.authScreenText : styles.authScreenTextDark;

    return (
        <ImageBackground style={styles.authScreenBackground} source={require('../../../assets/images/AuthBackground.jpg')} resizeMode="cover">
            <KeyboardAvoidingView behavior='height' style={styles.authScreen}>
                <View style={styles.authScreenImageContainer}>
                    <Image source={require("../../../assets/images/logo/logo-low-resolution-no-background.png")} style={styles.authScreenImage}/>
                </View>
                <View style={styles.authScreenContainer}>
                    <TouchableOpacity style={authScreenButton} onPress={() => navigation.navigate("Login")}>
                        <Text style={authScreenText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={authScreenButton} onPress={() => navigation.navigate("Register")}>
                        <Text style={authScreenText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

export default AuthScreen;