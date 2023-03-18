import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { addCard } from "../store/actions/card.action";
import { useDispatch } from "react-redux";
import colors from "../styles/constants/colors";
import styles from "../styles/styles";

const NewCardScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [card, setCard] = useState({});

    const handleSave = () => {
        dispatch(addCard(card));
        navigation.navigate("CardList");
    }

    return (
        <ScrollView>
            <View>
                <Text>Card</Text>
                <TextInput />
                <Button title="add" color={colors.COCOA_BROWN} onPress={() => console.log("Agregar tarjeta")} />
            </View>
        </ScrollView>
    )
}

export default NewCardScreen;