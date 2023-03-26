import { ADD_IMAGE, ERROR_LOGIN, LOGOUT, SIGNIN, SIGNUP } from "../actions/auth.action";

const initialState = {
    token: null,
    user: null,
    error: null,
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return { ...state, token: action.token, user: action.user, error: action.error }
        case SIGNIN:
            return { ...state, token: action.token, user: action.user, error: action.error }
        case LOGOUT:
            return { ...state, ...initialState }
        case ERROR_LOGIN:
            return { ...state, error: action.error }
        case ADD_IMAGE:
            return {
                ...state,
                user: {
                    ...state.user,
                    image: action.payload.image
                }
            }
        default:
            return state;
    }
}

export default AuthReducer;