import { deleteProductInCart, insertProductToCart, loadCart, searchProductInCart, updateQuantity } from "../../db";
import { URL_API } from "../../env/database"

export const ADD_ITEM = "ADD_ITEM";
export const GET_CART = "GET_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const INCREASE_ITEM = "INCREASE_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";
export const CONFIRM_PURCHASE = "CONFIRM_PURCHASE";

export const getCart = (userId) => {
    return async dispatch => {
        try {
            const result = await loadCart(userId);

            dispatch({
                type: GET_CART,
                cart: result.rows._array
            })
        } catch (error) {
            throw error;
        }
    }
}

export const addItem = (item, quantity, userId) => {
    return async dispatch => {
        try {
            const search = await searchProductInCart(item.id, userId);

            if (!search.rows.length) {
                const result = await insertProductToCart(item.id, quantity, userId, item.price, item.name, item.image);

                dispatch({
                    type: ADD_ITEM,
                    payload: { item: { ...item, quantity: quantity }}
                })
            } else {
                const update = await updateQuantity(item.id, ++search.rows._array[0].quantity, userId);

                dispatch({
                    type: INCREASE_ITEM,
                    itemId: item.id
                })
            }
        } catch (error) {
            throw error;
        }


    }
}

export const removeItem = (itemId, userId) => {
    return async dispatch => {
        const result = await deleteProductInCart(itemId, userId);

        dispatch({
            type: REMOVE_ITEM,
            itemId,
        })
    }
}

export const increaseItem = (item, userId) => {
    return async dispatch => {
        const update = await updateQuantity(item.idProduct, item.quantity+1, userId);

        dispatch({
            type: INCREASE_ITEM,
            itemId: item.id,
        })
    }
}

export const decreaseItem = (item, userId) => {
    return async dispatch => {
        if (item.quantity <= 1) {
            const result = await deleteProductInCart(item.idProduct, userId);

            dispatch({
                type: REMOVE_ITEM,
                itemId: item.idProduct,
            })
        } else {
            const update = await updateQuantity(item.idProduct, item.quantity-1, userId);

            dispatch({
                type: DECREASE_ITEM,
                itemId: item.id,
            })
        }
    }
}

export const confirmCart = (items, total) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL_API}/orders.json`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items: { ...items },
                    total,
                }),
            })
            const result = await response.json();
            dispatch({
                type: CONFIRM_PURCHASE,
                confirm: true,
            })
        } catch (error) {
            throw error
        }
    }
};