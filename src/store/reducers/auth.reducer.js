import { LOGOUT, SIGNIN, SIGNUP } from "../actions/auth.action";

const initialState = {
    token: null,
    user: null,
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return { ...state, token: action.token, user: action.user }
        case SIGNIN:
            return { ...state, token: action.token, user: action.user }
        case LOGOUT:
            return { ...state, ...initialState }
        default:
            return state;
    }
}

export default AuthReducer;