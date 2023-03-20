import React, { useEffect } from "react";
import { View, Text, FlatList, useColorScheme } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../components/CardItem";
import { getCards } from "../store/actions/card.action";
import styles from "../styles/styles";

const CardListScreen = () => {
    const colorScheme = useColorScheme();
    const cardListContainer = colorScheme === "light" ? styles.cardListScreen : styles.cardListScreenDark;
    const cardListScreenText = colorScheme === "light" ? styles.cardListScreenText : styles.cardListScreenTextDark;

    const dispatch = useDispatch();
    const cards = [
        {
            id: 1,
            number: "1234123412341234",
            month: "05",
            year: "2025",
            cod: "999",
            cardholderName: "John Doe",
            cardholderId: "123144",
        },
        {
            id: 2,
            number: "1234123412341234",
            month: "05",
            year: "2025",
            cod: "999",
            cardholderName: "John Doe",
            cardholderId: "123144",
        },
    ]//useSelector(state => state.card.cards);

    // useEffect(() => {
    //     dispatch(getCards());
    // }, []);

    const renderCardItem = ({ item }) => (
        <CardItem item={item} />
    )

    return (
        <View style={cardListContainer}>
            <Text style={cardListScreenText}>CARDS</Text>
            <FlatList
                data={cards}
                keyExtractor={item => item.id}
                renderItem={renderCardItem}
            />
        </View>
    )
}

export default CardListScreen;