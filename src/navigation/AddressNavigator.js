import React from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/styles";
import colors from "../styles/constants/colors";
import NewAddressScreen from "../screens/NewAddressScreen";
import AddressListScreen from "../screens/AddressListScreen";
import MapScreen from "../screens/MapScreen";
import { useSelector } from "react-redux";
import ChangeAddressScreen from "../screens/ChangeAddressScreen";

const Stack = createNativeStackNavigator();

const AddressNavigator = () => {
    const colorScheme = useColorScheme();
    const homeStyle = colorScheme === "light" ? styles.homeStyle : styles.homeStyleDark;
    const IconColor = colorScheme === "light" ? colors.DARK : colors.PRINCETON_ORANGE;
    const user = useSelector(state => state.auth.user)

    return (
        <Stack.Navigator
            initialRouteName="AddressList"
            screenOptions={{
                headerShadowVisible: true,
                headerStyle: homeStyle,
                headerTintColor: IconColor,
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen
                name="AddressList"
                initialParams={{ userId: user.id }}
                component={AddressListScreen}
                options={({ navigation }) => ({
                    title: "",
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("New Address")}>
                            <Ionicons
                                name="add-outline"
                                color={IconColor}
                                size={25}
                            />
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen
                name="New Address"
                component={NewAddressScreen}
                initialParams={{ userId: user.id }}
                options={{
                    title: "",
                }}
            />
            <Stack.Screen
                name="Change Address"
                component={ChangeAddressScreen}
                initialParams={{ userId: user.id }}
                options={{
                    title: "",
                }}
            />
            <Stack.Screen
                name="Map"
                component={MapScreen}
                initialParams={{ userId: user.id }}
                options={{
                    title: "Map",
                }}
            />
        </Stack.Navigator>
    )
};

export default AddressNavigator;