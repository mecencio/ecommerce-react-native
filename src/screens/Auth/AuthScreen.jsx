import React from 'react';
import { View, KeyboardAvoidingView, Image, ImageBackground, Text, TouchableOpacity, useColorScheme } from 'react-native';
import styles from "../../styles/styles";

const AuthScreen = ({ navigation }) => {
    const colorScheme = useColorScheme();
    const authScreenButton = colorScheme === "light" ? styles.authScreenButton : styles.authScreenButtonDark;
    const authScreenText = colorScheme === "light" ? styles.authScreenText : styles.authScreenTextDark;

    return (
        <ImageBackground style={styles.authScreenBackground} source={{uri: "https://media.istockphoto.com/id/1309279439/photo/making-payments-the-simple-way.jpg?b=1&s=170667a&w=0&k=20&c=G2sJ4ZZanF7rfROgk4ie6ZTT6s5Q6bouWKFEu_0OcxU="}} resizeMode="cover">
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