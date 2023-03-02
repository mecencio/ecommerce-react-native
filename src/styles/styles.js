import _BottomTabNavigator from "./pages/_BottomTabNavigator";
import _CartItem from "./pages/_CartItem";
import _CartScreen from "./pages/_CartScreen";
import _CategoriesItem from "./pages/_CategoriesItem";
import _CategoriesScreen from "./pages/_CategoriesScreen";
import _DetailScreen from "./pages/_DetailScreen";
import _IndexNavigator from "./pages/_IndexNavigator";
import _OrderItem from "./pages/_OrderItem";
import _ProductsItem from "./pages/_ProductsItem";
import _ProductsScreen from "./pages/_ProductsScreen";

export default {
    ..._BottomTabNavigator,
    ..._CategoriesItem,
    ..._CategoriesScreen,
    ..._ProductsItem,
    ..._ProductsScreen,
    ..._IndexNavigator,
    ..._CartScreen,
    ..._DetailScreen,
    ..._CartItem,
    ..._OrderItem,
}