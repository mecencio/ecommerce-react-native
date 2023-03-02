import _BottomTabNavigator from "./_BottomTabNavigator";
import _CartItem from "./_CartItem";
import _CartScreen from "./_CartScreen";
import _CategoriesItem from "./_CategoriesItem";
import _CategoriesScreen from "./_CategoriesScreen";
import _DetailScreen from "./_DetailScreen";
import _IndexNavigator from "./_IndexNavigator";
import _ProductsItem from "./_ProductsItem";
import _ProductsScreen from "./_ProductsScreen";

export default {
    ..._BottomTabNavigator,
    ..._CategoriesItem,
    ..._CategoriesScreen,
    ..._ProductsItem,
    ..._ProductsScreen,
    ..._IndexNavigator,
    ..._CartScreen,
    ..._DetailScreen,
    ..._CartItem
}