import { ADD_CARD, DELETE_CARD, GET_CARDS } from "../actions/card.action";

const initialState = {
    cards: [],
}

const CardReducer = ( state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return { 
                ...state, 
                cards: [...state.cards, action.payload] 
            }
        case GET_CARDS:
            return {
                ...state,
                cards: [...action.payload.cards]
            }
        case DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter(item => item.id !== action.payload.cardId),
            }
        default:
            return state;
    }
};

export default CardReducer;