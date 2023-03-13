import { PRODUCTS } from "../../data/products";
import { SELECTED_PRODUCT, FILTERED_PRODUCT, SHOW_LOADER, HIDE_LOADER } from "../actions/products.action";

const initialState = {
    products: PRODUCTS,
    filteredProduct: [],
    loading: true,
    selected: null,
    totalProducts: 0,
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
                filteredProduct: [...action.products],
                totalProducts: action.totalProducts,
                loading: action.loading,
            }
        case SHOW_LOADER:
            return {
                ...state,
                loading: true,
            }
        case HIDE_LOADER:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
};

export default ProductReducer;