import { ADD_ADDRESS, ADD_ADDRESS_BY_COORDS, DELETE_ADDRESS, GET_ADDRESSES, UPDATE_ADDRESS, UPDATE_ADDRESS_BY_COORDS } from "../actions/address.action";

const initialState = {
    addresses: [],
}

const AddressReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            return { 
                ...state, 
                addresses: [...state.addresses, action.payload] 
            }
        case ADD_ADDRESS_BY_COORDS:
            return { 
                ...state, 
                addresses: [...state.addresses, action.payload] 
            }
        case GET_ADDRESSES:
            return {
                ...state,
                addresses: [...action.payload.addresses]
            }
        case UPDATE_ADDRESS: 
            return {
                ...state,
                addresses: [...state.addresses.filter(item => item.id !== action.payload.id), action.payload]
            }
        case UPDATE_ADDRESS_BY_COORDS: 
            return {
                ...state,
                addresses: [...state.addresses.filter(item => item.id !== action.payload.id), action.payload]
            }
        case DELETE_ADDRESS:
            return {
                ...state,
                addresses: state.addresses.filter(item => item.id !== action.payload.addressId),
            }
        default:
            return state;
    }
}

export default AddressReducer;