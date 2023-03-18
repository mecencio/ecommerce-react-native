import React, { useState } from 'react';
import { Text, View, Button, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/styles';
import colors from '../styles/constants/colors';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';

const ImageSelector = props => {
    const colorScheme = useColorScheme();
    const imageSelectorPreview = colorScheme === "light" ? styles.imageSelectorPreview : styles.imageSelectorPreviewDark;
    const imageSelectorText = colorScheme === "light" ? styles.imageSelectorText : styles.imageSelectorTextDark;
    const [pickedUri, setPickedUri] = useState(props.value && props.value);

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
            aspect: [4, 4],
            quality: 0.8,
        })

        setPickedUri(image.assets[0].uri);
        props.onImage(image.assets[0].uri);
    };

    return (
        <View style={styles.imageSelector}>
            <View style={imageSelectorPreview}>
                {!pickedUri ? (
                    <Text style={imageSelectorText}>No hay imagen seleccionada</Text>
                ) : (
                    <Image source={{uri: pickedUri}} style={styles.imageSelectorImage} />
                )}
            </View>
            <Button title='Take a photo' color={colors.PRINCETON_ORANGE} onPress={handleTakeImage} />
        </View>
    )
}

export default ImageSelector;