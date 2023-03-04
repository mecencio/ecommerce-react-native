export const ADD_CARD = "ADD_CARD";
export const GET_CARDS = "GET_CARDS";

export const addCard = ( card ) => ({
    type: ADD_CARD,
    payload: { card },
})

export const getCards = () => ({
    type: GET_CARDS,
})