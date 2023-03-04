import { ADD_ADDRESS, GET_ADDRESSES } from "../actions/address.action";
import Address from "../../models/Address";

const initialState = {
    adresses: [],
}

const AddressReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            const newAddress = new Address (Date.now(), action.payload.title);
            return { ...state, addresses: [...state.adresses, newAddress] }
        case GET_ADDRESSES:
            return state;
        default:
            return state;
    }
}

export default AddressReducer;