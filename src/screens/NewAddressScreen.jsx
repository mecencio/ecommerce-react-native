import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { addAddress } from "../store/actions/address.action";
import { useDispatch } from "react-redux";
import colors from "../styles/constants/colors";
import styles from "../styles/styles";

const NewAddressScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    const handleTitleChange = (text) => setTitle(text);

    const handleSave = () => {
        dispatch(addAddress(title));
        navigation.navigate("AddressList");
    }

    return (
        <ScrollView>
            <View>
                <Text>Title</Text>
                <TextInput onChangeText={handleTitleChange} />
                <Button title="add" color={colors.RASPBERRY_ROSE} onPress={handleSave} />
            </View>
        </ScrollView>
    )
}

export default NewAddressScreen;