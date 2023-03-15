import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addImage } from "../store/actions/image.action"
import ImageSelector from '../components/ImageSelector';
import colors from '../styles/constants/colors';

const NewImageScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [image, setImage] = useState("");
    const userId = useSelector(state => state.auth.user.id);

    const handleSave = () => {
        dispatch(addImage(userId, image))
        navigation.navigate("Profile")
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text  style={styles.label}>Título</Text>
                <ImageSelector onImage={image => setImage(image) } />
                <Button title="add" color={colors.RASPBERRY_ROSE} onPress={handleSave}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    input: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
    }
})

export default NewImageScreen;