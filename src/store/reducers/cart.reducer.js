import { ADD_ITEM, REMOVE_ITEM, CONFIRM_PURCHASE, DECREASE_ITEM, INCREASE_ITEM, GET_CART } from "../actions/cart.action";

const initialState = {
    items: [],
    total: 0,
};

const finalPrice = (items) => {
    return items.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0)
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART:
            return { ...state, items: [...action.cart], total: finalPrice(action.cart) }
        case ADD_ITEM:
            const index = state.items.findIndex(item => item.id === action.payload.item.id);
            if (index === -1) {
                const item = { ...action.payload.item };
                const updatedCart = [...state.items, item];
                return { ...state, items: updatedCart, total: finalPrice(updatedCart) }
            } else {
                const items = state.items;
                items[index].quantity++;
                return { ...state, items: items, total: finalPrice(items) }
            }
        case INCREASE_ITEM:
            const id = state.items.findIndex(item => item.id === action.itemId);
            if (id !== -1) {
                const arrayItems = state.items;
                arrayItems[id].quantity++;
                return { ...state, items: arrayItems, total: finalPrice(arrayItems) }
            }
        case DECREASE_ITEM:
            const indexItem = state.items.findIndex(item => item.id === action.itemId);
            if (indexItem !== -1) {
                const arrayItems = state.items;
                arrayItems[indexItem].quantity--;
                return { ...state, items: arrayItems, total: finalPrice(arrayItems) }
            }
        case REMOVE_ITEM:
            const newCart = [...state.items].filter(item => item.idProduct !== action.itemId);
            return { ...state, items: newCart, total: finalPrice(newCart) }
        case CONFIRM_PURCHASE:
            return state;
        default:
            return state;
    }
};

export default CartReducer;