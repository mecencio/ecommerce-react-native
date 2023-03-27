import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrdersScreen from "../screens/OrdersScreen";
import styles from "../styles/styles";
import colors from "../styles/constants/colors";
import { useColorScheme } from "react-native";

const Stack = createNativeStackNavigator();

export default OrdersNavigator = () => {
    const colorScheme = useColorScheme();
    const homeStyle = colorScheme === "light" ? styles.homeStyle : styles.homeStyleDark;
    const IconColor = colorScheme === "light" ? colors.DARK : colors.PRINCETON_ORANGE;

    return ( 
        <Stack.Navigator
            initialRouteName="Orders"
            screenOptions={{
                headerShadowVisible: true,
                headerStyle: homeStyle,
                headerTintColor: IconColor,
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen
                name="Orders"
                component={OrdersScreen}
                options={{
                    title: "",
                    headerTintColor: IconColor,
                }}
            />
        </Stack.Navigator>
    )
}