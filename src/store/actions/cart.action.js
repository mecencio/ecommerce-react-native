import { URL_API } from "../../env/database"

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";
export const CONFIRM_PURCHASE = "CONFIRM_PURCHASE";

export const addItem = (item) => ({
    type: ADD_ITEM,
    item,
});

export const removeItem = (itemId) => ({
    type: REMOVE_ITEM,
    itemId,
});

export const decreaseItem = (itemId) => ({
    type: DECREASE_ITEM,
    itemId,
});

export const confirmCart = (items, total) => {
    return async (dispatch) => {
        try {
            const response = await fetch (`${URL_API}/orders.json`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    date: Date.now(), 
                    items: {...items}, 
                    total,
                }),
            })
            const result = await response.json();
            dispatch({
                type: CONFIRM_PURCHASE,
                confirm: true,
            })
        } catch (error) {
            console.log(error)
        }
    }
};