import { URL_AUTH_SIGNUP } from "../../data/database";

export const SIGNUP = "SIGNUP";

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