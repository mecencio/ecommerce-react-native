import { insertCard, loadCard } from "../../db";
import Card from "../../models/Card";

export const ADD_CARD = "ADD_CARD";
export const GET_CARDS = "GET_CARDS";
export const DELETE_CARD = "DELETE_CARD";

export const addCard = (card) => {
    return async dispatch => {
        const result = await insertCard(card.number, card.month, card.year, card.cod, card.cardholderName, card.cardholderId, card.userId);

        const newCard = new Card(result.insertId, card.number, card.month, card.year, card.cod, card.cardholderName, card.cardholderId, card.userId)
        dispatch({type: ADD_CARD, payload: newCard})
    }
}

export const getAddresses = (userId) => {
    return async dispatch => {
        try {
            const result = await loadCard(userId);
            if (!result) return
            dispatch({type: GET_CARDS, payload: {cards: result.rows._array}})
        } catch (error) {
            throw error
        }
    }
}

export const deleteAddress = (cardId) => {
    return async dispatch => {
        await removeAddress(cardId);
        dispatch({type: DELETE_CARD, payload: {cardId: cardId}})
    }
}