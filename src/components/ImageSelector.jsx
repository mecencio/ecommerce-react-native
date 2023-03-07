import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import colors from '../styles/constants/colors';

const ImageSelector = props => {
    const [pickedUri, setPickedUri] = useState();

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
            Alert.alert("Permisos insuficientes", "Necesita permisos de la cámara para usar la aplicación", [{ text: "OK" }])
            return false;
        }
        return true;
    };

    const handleTakeImage = async () => {
        const isCameraOk = await verifyPermissions();
        if (!isCameraOk) return

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8,
        })

        setPickedUri(image.assets[0].uri);
        props.onImage(image.assets[0].uri);
    };

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri ? (
                    <Text>No hay imagen seleccionada</Text>
                ) : (
                    <Image source={{uri: pickedUri}} style={styles.image} />
                )}
            </View>
            <Button title='Tomar foto' color={colors.SALMON_PINK} onPress={handleTakeImage} />
        </View>
    )
}

export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    preview: {
        width: "100%",
        height: 200,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.BLUSH,
        borderWidth: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
})