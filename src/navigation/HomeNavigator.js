import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"
import CategoriesScreen from "../screens/CategoriesScreen";
import DetailsScreen from "../screens/DetailScreen";
import ProductsScreen from "../screens/ProductsScreen";
import colors from "../styles/constants/colors";
import styles from "../styles/styles";

const Stack = createNativeStackNavigator();

export default HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerShadowVisible: true,
                headerStyle: styles.HomeStyle,
                headerTintColor: colors.primary,
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen 
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: "Home",
                }}
            />
            <Stack.Screen
                name="Products"
                component={ProductsScreen}
                options={({ route }) => ({
                    title: route.params.name
                })}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options= {({ route }) => ({
                    title:route.params.name
                })}
            />
        </Stack.Navigator>
    )
}