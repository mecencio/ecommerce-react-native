import { ADD_CARD, DELETE_CARD, GET_CARDS } from "../actions/card.action";
import Card from "../../models/Card";

const initialState = {
    cards: [],
}

const CardReducer = ( state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return { 
                ...state, 
                addresses: [...state.cards, action.payload] 
            }
        case GET_CARDS:
            return {
                ...state,
                addresses: [...action.payload.cards]
            }
        case DELETE_CARD:
            return {
                ...state,
                addresses: state.cards.filter(item => item.id !== action.payload.addressId),
            }
        default:
            return state;
    }
};

export default CardReducer;