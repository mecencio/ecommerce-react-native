import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProfileScreen from "../screens/ProfileScreen";
import styles from "../styles/styles";
import colors from "../styles/constants/colors";
import AddressNavigator from "./AddressNavigator";
import CardNavigator from "./CardsNavigator";
import NewImageScreen from "../screens/NewImageScreen";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerShadowVisible: true,
                headerStyle: styles.homeStyle,
                headerTintColor: colors.primary,
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: "Profile"
                }}
            />
            <Stack.Screen
                name="AddressTab"
                component={AddressNavigator}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="CardTab"
                component={CardNavigator}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
            name="NewImage"
            component={NewImageScreen}
            />
        </Stack.Navigator>
    )
}

export default ProfileNavigator;