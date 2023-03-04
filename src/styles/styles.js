import _AuthScreen from "./pages/_AuthScreen";
import _BottomTabNavigator from "./pages/_BottomTabNavigator";
import _CartItem from "./pages/_CartItem";
import _CartScreen from "./pages/_CartScreen";
import _CategoriesItem from "./pages/_CategoriesItem";
import _CategoriesScreen from "./pages/_CategoriesScreen";
import _DetailScreen from "./pages/_DetailScreen";
import _HomeNavigator from "./pages/_HomeNavigator";
import _input from "./pages/_input";
import _OrderItem from "./pages/_OrderItem";
import _ProductsItem from "./pages/_ProductsItem";
import _ProductsScreen from "./pages/_ProductsScreen";

export default {
    ..._BottomTabNavigator,
    ..._CategoriesItem,
    ..._CategoriesScreen,
    ..._ProductsItem,
    ..._ProductsScreen,
    ..._HomeNavigator,
    ..._CartScreen,
    ..._DetailScreen,
    ..._CartItem,
    ..._OrderItem,
    ..._AuthScreen,
    ..._input,
}