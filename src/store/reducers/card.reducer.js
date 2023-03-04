import { ADD_CARD, GET_CARDS } from "../actions/card.action";
import Card from "../../models/Card";

const initialState = {
    cards: [],
}

const CardReducer = ( state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            const newCard = new Card ({...action.payload});
            return { ...state, cards: [...state.cards, newCard] }
        case GET_CARDS:
            return state;
        default:
            return state;
    }
};

export default CardReducer;