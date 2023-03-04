import { GET_ORDERS } from "../actions/order.action";

const initialState = {
    orders: [],
}

const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {...state, orders: action.orders};
        default:
            return state;
    }
}

export default OrderReducer;