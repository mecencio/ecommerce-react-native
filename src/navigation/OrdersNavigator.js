import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrdersScreen from "../screens/OrdersScreen";
import styles from "../styles/styles";
import colors from "../styles/constants/colors";

const Stack = createNativeStackNavigator();

export default OrdersNavigator = () => {
    return ( 
        <Stack.Navigator
            initialRouteName="Orders"
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
                name="Orders"
                component={OrdersScreen}
                options={{
                    title: "Orders",
                }}
            />
        </Stack.Navigator>
    )
}