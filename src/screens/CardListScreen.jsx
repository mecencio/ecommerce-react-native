import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../components/CardItem";
import { getCards } from "../store/actions/card.action";

const CardListScreen = () => {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.card.cards);

    useEffect(() => {
        dispatch(getCards());
    }, []);

    const renderCardItem = ({ item }) => (
        <CardItem item={item} />
    )

    return (
        <FlatList
            data={cards}
            keyExtractor={item => item.id}
            renderItem={renderCardItem}
        />
    )
}

export default CardListScreen;