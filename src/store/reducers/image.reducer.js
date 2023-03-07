import { ADD_IMAGE } from "../actions/image.action";

const initialState = {
    image: null
}

const ImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IMAGE:
            return {
                ...state,
                image: action.payload.image
            }
        default:
            return state
    }
}

export default ImageReducer;