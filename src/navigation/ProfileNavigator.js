import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, useColorScheme } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProfileScreen from "../screens/ProfileScreen";
import styles from "../styles/styles";
import colors from "../styles/constants/colors";
import AddressNavigator from "./AddressNavigator";
import CardNavigator from "./CardsNavigator";
import NewImageScreen from "../screens/NewImageScreen";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    const colorScheme = useColorScheme();
    const homeStyle = colorScheme === "light" ? styles.homeStyle : styles.homeStyleDark;
    const IconColor = colorScheme === "light" ? colors.DARK : colors.PRINCETON_ORANGE;

    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerShadowVisible: false,
                headerStyle: homeStyle,
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: "",
                    headerTintColor: IconColor,
                }}
            />
            <Stack.Screen
                name="AddressTab"
                component={AddressNavigator}
                options={{
                    headerShown: false,
                    headerTintColor: IconColor,
                }}
            />
            <Stack.Screen
                name="CardTab"
                component={CardNavigator}
                options={{
                    headerShown: false,
                    headerTintColor: IconColor,
                }}
            />
            <Stack.Screen
                name="NewImage"
                component={NewImageScreen}
                options={{
                    title: "",
                    headerTintColor: IconColor,
                }}
            />
        </Stack.Navigator>
    )
}

export default ProfileNavigator;