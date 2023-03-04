import React from "react";
import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/styles";
import colors from "../styles/constants/colors";
import NewCardScreen from "../screens/NewCardScreen";
import CardListScreen from "../screens/CardListScreen";

const Stack = createNativeStackNavigator();

const CardNavigator = () => (
    <Stack.Navigator
    initialRouteName="CardList"
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
                    name="CardList"
                    component={CardListScreen}
                    options={({ navigation }) => ({
                        title: "CardList",
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate("New Card")}>
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
            name="New Card"
            component={NewCardScreen}
            options={{
                title: "New Card"
            }}
        />
    </Stack.Navigator>
);

export default CardNavigator;