import { PRODUCTS } from "../../data/products";
import { SELECTED_PRODUCT, FILTERED_PRODUCT, filteredProduct } from "../actions/products.action";

const initialState = {
    products: PRODUCTS,
    filteredProduct: [],
    selected: null,
};

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_PRODUCT:
            return {
                ...state,
                selected: state.products.find(item => item.id === action.productId),
            };
        case FILTERED_PRODUCT:
            return {
                ...state,
                filteredProduct: state.products.filter(item => item.category === action.categoryId),
            }
        default:
            return state;
    }
};

export default ProductReducer;