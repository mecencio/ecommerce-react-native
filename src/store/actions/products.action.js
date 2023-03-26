import { URL_API_ML, URL_API_ML_PRODUCT_DESCRIPTION } from "../../env/database";

export const SELECTED_PRODUCT = "SELECTED_PRODUCT";
export const FILTERED_PRODUCT = "FILTERED_PRODUCT";
export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";

export const selectedProduct = (item) => {
    return async dispatch => {
        try {
            dispatch({ type: SHOW_LOADER })
            let data = await fetch(URL_API_ML_PRODUCT_DESCRIPTION + item.id)
                .then( response => { return response.json() } );
            let description = await fetch(URL_API_ML_PRODUCT_DESCRIPTION + item.id + "/description")
                .then(response => { return response.json() } )
            dispatch({
                type: SELECTED_PRODUCT,
                payload: {
                    product: { ...item, images: data.pictures, description: description.plain_text },
                    loading: false,
                },
            })
        } catch (error) {
            throw error
        }
    }
}

export const showLoader = () => {
    return async dispatch => {
        dispatch({
            type: SHOW_LOADER,
        })
    }
}

export const hideLoader = () => (dispatch) => {
    dispatch({
        type: HIDE_LOADER,
    })
}

export const filteredProduct = (categoryId, offset, selectedSort) => {
    return async dispatch => {
        try {
            dispatch({ type: SHOW_LOADER })
            let data = await fetch(URL_API_ML + `category=${categoryId}&limit=50&offset=${offset}&sort=${selectedSort}`)
                .then(response => { return response.json() });
            const max = data.paging.total;
            let result = data.results.map((item) => {
                const arr = item.thumbnail.split("");
                arr.splice(-5, 1, "F");
                return {
                    id: item.id,
                    category: categoryId,
                    name: item.title,
                    currency: item.currency_id,
                    price: item.price,
                    img: arr.join(""),
                    free_shipping: item.shipping.free_shipping,
                    condition: item.condition,
                    sold_quantity: item.sold_quantity,
                    available_quantity: item.available_quantity,
                }
            })

            dispatch({
                type: FILTERED_PRODUCT,
                products: [...result],
                totalProducts: max,
                loading: false,
            })
        } catch (error) {
            throw error;
        }
    }
}