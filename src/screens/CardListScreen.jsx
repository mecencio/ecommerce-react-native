import React, { useEffect } from "react";
import { View, Text, FlatList, useColorScheme } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../components/CardItem";
import { deleteCard, getCards } from "../store/actions/card.action";
import styles from "../styles/styles";

const CardListScreen = ({ route }) => {
    const colorScheme = useColorScheme();
    const cardListContainer = colorScheme === "light" ? styles.cardListScreen : styles.cardListScreenDark;
    const cardListScreenText = colorScheme === "light" ? styles.cardListScreenText : styles.cardListScreenTextDark;

    const dispatch = useDispatch();
    const cards = useSelector(state => state.card.cards);

    useEffect(() => {
        dispatch(getCards(route.params.userId));
    }, []);

    const handleDeleteCard = (cardId) => {
        dispatch(deleteCard(cardId));
    }

    const renderCardItem = ({ item }) => (
        <CardItem item={item} onDelete={handleDeleteCard} />
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