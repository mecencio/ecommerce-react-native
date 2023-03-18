import React, { useState } from 'react';
import { View, Text, ScrollView, Button, useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addImage } from "../store/actions/image.action"
import ImageSelector from '../components/ImageSelector';
import styles from '../styles/styles';
import colors from '../styles/constants/colors';

const NewImageScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const colorScheme = useColorScheme();
    const newImageScreen = colorScheme === "light" ? styles.newImageScreen : styles.newImageScreenDark;
    const newImageScreenContainer = colorScheme === "light" ? styles.newImageScreenContainer : styles.newImageScreenContainerDark;
    const newImageScreenLabel = colorScheme === "light" ? styles.newImageScreenLabel : styles.newImageScreenLabelDark;

    const [image, setImage] = useState("");
    const user = useSelector(state => state.auth.user);
    const oldImage = useSelector(state => state.image.image);

    const handleSave = () => {
        dispatch(addImage(user.id, image))
        navigation.navigate("Profile")
    }

    return (
        <ScrollView style={newImageScreen}>
            <View style={newImageScreenContainer}>
                <Text  style={newImageScreenLabel}>NEW PHOTO</Text>
                <ImageSelector value={oldImage} onImage={image => setImage(image) } />
                <Button title="add" color={colors.COCOA_BROWN} onPress={handleSave}/>
            </View>
        </ScrollView>
    )
}

export default NewImageScreen;