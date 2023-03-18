import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../screens/Auth/AuthScreen";
import colors from "../styles/constants/colors";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import { useColorScheme } from "react-native";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    const colorScheme = useColorScheme();;
    const IconColor = colorScheme === "light" ? colors.DARK : colors.PRINCETON_ORANGE;

    return (
        <Stack.Navigator
            initialRouteName="Auth"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Auth"
                component={AuthScreen}
                options={{
                    title: "Auth",
                }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: IconColor,
                    headerTitleStyle: {
                        color: "#FFFFFF00"
                    }
                }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: IconColor,
                    headerTitleStyle: {
                        color: "#FFFFFF00"
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthNavigator;