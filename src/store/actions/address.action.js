export const ADD_ADDRESS = "ADD_ADDRESS";
export const GET_ADDRESSES = "GET_ADDRESSES";

export const addAddress = (title) => ({
    type: ADD_ADDRESS,
    payload: { title },
})

export const getAddresses = () => ({
    type: GET_ADDRESSES,
})