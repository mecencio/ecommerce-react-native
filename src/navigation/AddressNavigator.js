import React from "react";
import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/styles";
import colors from "../styles/constants/colors";
import NewAddressScreen from "../screens/NewAddressScreen";
import AddressListScreen from "../screens/AddressListScreen";

const Stack = createNativeStackNavigator();

const AddressNavigator = () => (
    <Stack.Navigator
        initialRouteName="AddressList"
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
            name="AddressList"
            component={AddressListScreen}
            options={({ navigation }) => ({
                title: "AddressList",
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("New Address")}>
                        <Ionicons
                            name="add-outline"
                            color={colors.CHOCOLATE_COSMOS}
                            size={24}
                        />
                    </TouchableOpacity>
                ),
            })}
        />
        <Stack.Screen
            name="New Address"
            component={NewAddressScreen}
            options={{
                title: "New Address",
            }}
        />
    </Stack.Navigator>
);

export default AddressNavigator;