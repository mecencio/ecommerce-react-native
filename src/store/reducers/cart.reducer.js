import { ADD_ITEM, REMOVE_ITEM, CONFIRM_PURCHASE, DECREASE_ITEM } from "../actions/cart.action";

const initialState = {
    items: [],
    total: 0,
};

const finalPrice = (items) => {
    return items.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0)
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const index = state.items.findIndex(item => item.id === action.item.id);
            if (index === -1) {
                const item = { ...action.item, quantity: 1 };
                const updatedCart = [...state.items, item];
                return { ...state, items: updatedCart, total: finalPrice(updatedCart) }
            } else {
                const items = state.items;
                items[index].quantity++;
                return { ...state, items: items, total: finalPrice(items) }
            }
        case DECREASE_ITEM:
            const id = state.items.findIndex(item => item.id === action.itemId);
            if (id !== -1) {
                const arrayItems = state.items;
                arrayItems[id].quantity++;
                return { ...state, items: arrayItems, total: finalPrice(arrayItems) }
            }
        case DECREASE_ITEM:
            const indexItem = state.items.findIndex(item => item.id === action.itemId);
            if (indexItem !== -1) {
                if (state.items[indexItem].quantity === 1) {
                    const cart = [...state.items].filter(item => item.id !== action.itemId);
                    return { ...state, items: cart, total: finalPrice(cart) }
                } else {
                    const arrayItems = state.items;
                    arrayItems[indexItem].quantity--;
                    return { ...state, items: arrayItems, total: finalPrice(arrayItems) }
                }
            }
        case REMOVE_ITEM:
            const newCart = [...state.items].filter(item => item.id !== action.itemId);
            return { ...state, items: newCart, total: finalPrice(newCart) }
        case CONFIRM_PURCHASE:
            return state;
        default:
            return state;
    }
};

export default CartReducer;