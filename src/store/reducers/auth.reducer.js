import { LOGOUT, SIGNIN, SIGNUP } from "../actions/auth.action";

const initialState = {
    token: null,
    userId: null,
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return { ...state, token: action.token, userId: action.userId }
        case SIGNIN:
            return { ...state, token: action.token, userId: action.userId }
        case LOGOUT:
            return { ...state, ...initialState }
        default:
            return state;
    }
}

export default AuthReducer;