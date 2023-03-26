import * as FileSystem from 'expo-file-system';
import { fetchUser, newUser, changeImage } from "../../db";
import { URL_AUTH_RESET_PASSWORD, URL_AUTH_SIGNIN, URL_AUTH_SIGNUP } from "../../env/database";
import User from "../../models/User";
import * as SecureStore from 'expo-secure-store';

export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const LOGOUT = "LOGOUT";
export const ERROR_LOGIN = "ERROR_LOGIN";
export const ADD_IMAGE = 'ADD_IMAGE';

export const signup = (email, password) => {
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

            const user = new User(data.localId, email)
            try {
                SecureStore.setItemAsync("userId", data.localId)
                SecureStore.setItemAsync("idToken", data.idToken)
                const result = await newUser(user);
            } catch (error) {
                throw error;
            }
            dispatch({
                type: SIGNUP,
                token: data.idToken,
                user: user,
                error: null
            })
        } catch (error) {
            throw error;
        }
    }
}

export const signin = (email, password) => {
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

            const data = await response.json()

            try {
                SecureStore.setItemAsync("userId", data.localId);
                SecureStore.setItemAsync("idToken", data.idToken);
                const result = await fetchUser(data.localId);
                if (result.rows._array) {
                    const idUser = result.rows._array[0].id
                    const emailUser = result.rows._array[0].email
                    const firstnameUser = result.rows._array[0].firstname || ""
                    const lastnameUser = result.rows._array[0].lastname || ""
                    const documentUser = result.rows._array[0].document || ""
                    const phoneUser = result.rows._array[0].phone || ""
                    const imageUser = result.rows._array[0].image || ""

                    dispatch({
                        type: SIGNIN,
                        token: data.idToken,
                        user: new User(idUser, emailUser, firstnameUser, lastnameUser, documentUser, phoneUser, imageUser),
                        error: null,
                    })
                } else {
                    dispatch({
                        type: ERROR_LOGIN,
                        error: "Mail and/or password invalid"
                    })
                }

            } catch (error) {
                throw error;
            }

        } catch (error) {
            throw error;
        }
    }
};

export const resetPassword = (email) => {
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
            throw error;
        }
    }
}

export const logout = () => {
    return async dispatch => {
        SecureStore.deleteItemAsync("userId");
        SecureStore.deleteItemAsync("idToken");

        dispatch({
            type: LOGOUT
        })
    }
}

export const loadUser = (userId) => {
    return async dispatch => {
        try {
            const idToken = await SecureStore.getItemAsync("idToken")
            if (userId) {
                const resultUser = await fetchUser(userId);
                const idUser = resultUser.rows._array[0].id
                const emailUser = resultUser.rows._array[0].email
                const firstnameUser = resultUser.rows._array[0].firstname || ""
                const lastnameUser = resultUser.rows._array[0].lastname || ""
                const documentUser = resultUser.rows._array[0].document || ""
                const phoneUser = resultUser.rows._array[0].phone || ""
                const imageUser = resultUser.rows._array[0].image || ""

                dispatch({
                    type: SIGNIN,
                    token: idToken,
                    user: new User(idUser, emailUser, firstnameUser, lastnameUser, documentUser, phoneUser, imageUser),
                    error: null,
                })
            } else {
                dispatch({
                    type: ERROR_LOGIN,
                    error: "Mail and/or password invalid"
                })
            }
        } catch (error) {
            throw error;
        }
    }
};

export const addImage = ( userId, image ) => {
    return async dispatch => {
        const fileName = image.split('/').pop();
        const Path = FileSystem.documentDirectory + fileName;

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
            const result = await changeImage(userId, Path)
        } catch (error) {
            throw error;
        }

        dispatch({ type: ADD_IMAGE, payload: { image: Path } })
    }
}