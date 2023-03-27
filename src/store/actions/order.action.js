import { URL_API } from "../../env/database";

export const GET_ORDERS = "GET_ORDERS";

export const getOrders = (userId) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/orders.json`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const result = await response.json();
            const orders = Object.keys(result).map(key => ({
                ...result[key],
                id: key,
            }))
            
            const userOrders = orders.filter(order => order.userId === userId)
            
            dispatch({ type: GET_ORDERS, orders: userOrders});
        } catch (error) {
            console.log(error)
        }
    }
}