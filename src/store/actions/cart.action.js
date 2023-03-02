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