import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import DetailsScreen from "../screens/DetailScreen";
import ProductsScreen from "../screens/ProductsScreen";
import colors from "../styles/constants/colors";
import styles from "../styles/styles";

const Stack = createNativeStackNavigator();

export default IndexNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerShadowVisible: true,
                headerStyle: styles.indexStyle,
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
                    title: "Index",
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