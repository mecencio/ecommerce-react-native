import { useColorScheme } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../screens/CartScreen";
import styles from "../styles/styles";
import colors from "../styles/constants/colors";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
    const colorScheme = useColorScheme();
    const IconColor = colorScheme === "light" ? colors.DARK : colors.PRINCETON_ORANGE;

    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerShadowVisible: true,
                headerStyle: styles.indexStyle,
                headerTintColor: IconColor,
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    title: "Cart"
                }}
            />
        </Stack.Navigator>
    )
}