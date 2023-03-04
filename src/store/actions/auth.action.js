import { URL_AUTH_RESET_PASSWORD, URL_AUTH_SIGNIN, URL_AUTH_SIGNUP } from "../../env/database";

export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const LOGOUT = "LOGOUT";

export const signup = ( email, password ) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_AUTH_SIGNUP, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true,
                })
            })

            const data = await response.json();

            dispatch({
                type: SIGNUP,
                token: data.idToken,
                userId: data.localId,
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const signin = ( email, password ) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_AUTH_SIGNIN, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true,
                })
            })

            const data = await response.json();

            dispatch({
                type: SIGNIN,
                token: data.idToken,
                userId: data.localId,
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export const resetPassword = ( email ) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_AUTH_RESET_PASSWORD, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    requestType: "PASSWORD_RESET",
                    email,
                })
            })

            const data = await response.json();

            dispatch({
                type: RESET_PASSWORD,
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export const logout = () => ({
        type: LOGOUT,
});