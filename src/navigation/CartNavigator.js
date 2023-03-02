import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../screens/CartScreen";
import styles from "../styles/styles";
import colors from "../styles/constants/colors";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerShadowVisible: false,
                headerStyle: styles.indexStyle,
                headerTintColor: colors.primary,
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen
                name="Carro"
                component={CartScreen}
                options={{
                    title: "Carro"
                }}
            />
        </Stack.Navigator>
    )
}