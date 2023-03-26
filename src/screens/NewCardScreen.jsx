import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, useColorScheme } from "react-native";
import { addCard } from "../store/actions/card.action";
import { useDispatch } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons"
import colors from "../styles/constants/colors";
import styles from "../styles/styles";
import GenericInput from "../components/GenericInput";

const NewCardScreen = ({ navigation, route }) => {
    const colorScheme = useColorScheme();
    const newCardScreen = colorScheme === "light" ? styles.newCardScreen : styles.newCardScreenDark;
    const IconColor = colorScheme === "light" ? colors.DARK : colors.PRINCETON_ORANGE;

    const dispatch = useDispatch();
    const [ card, setCard ] = useState({});
    const [ complete, setComplete ] = useState(false);
    const [ cardNumberOk, setCardNumberOk ] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => complete && (
                <TouchableOpacity onPress={handleSave} >
                    <Ionicons name="md-save-outline" color={IconColor} size={25} />
                </TouchableOpacity>
            )
        })
    }, [navigation, complete]);

    useEffect(() => {
        if (card?.number && card?.month && card?.year && card?.cod && card?.cardholderName && card?.cardholderId) {
            setComplete(true)
        } else {
            setComplete(false)
        }
        if (card?.number?.length >= 16) {setCardNumberOk(true)}
        else {setCardNumberOk(false)}
    }, [card])

    const handleInputChange = (data) => {
        setCard({ ...card, ...data })
    };

    const handleSave = () => {
        dispatch(addCard({...card, userId: route?.params?.userId}));
        navigation.navigate("CardList");
    }

    return (
        <ScrollView style={newCardScreen}>
            <View style={styles.newCardScreenContainer}>
                <GenericInput label="Number * : " onInputChange={(text) => handleInputChange({ number: text })} />
                {!cardNumberOk && (
                    <Text style={styles.newCardScreenErrorText}>Card number must contain 16 numbers at least</Text>
                )}
                <View style={styles.newCardScreenSubcontainer}>
                    <GenericInput label="Month * : " onInputChange={(text) => handleInputChange({ month: text })} style={{width: 85}} />
                    <GenericInput label="Year * : " onInputChange={(text) => handleInputChange({ year: text })} style={{width: 120}} />
                    <GenericInput label="Cod * : " onInputChange={(text) => handleInputChange({ cod: text })} style={{width: 85}} />
                </View>
                <View style={styles.newCardScreenSubcontainer}>
                    <GenericInput label="Cardholder * : " onInputChange={(text) => handleInputChange({ cardholderName: text })} style={{width: 200}} />
                    <GenericInput label="ID * : " onInputChange={(text) => handleInputChange({ cardholderId: text })} style={{width: 120}} />
                </View>
            </View>
        </ScrollView>
    )
}

export default NewCardScreen;