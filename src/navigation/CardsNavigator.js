import React from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/styles";
import colors from "../styles/constants/colors";
import NewCardScreen from "../screens/NewCardScreen";
import CardListScreen from "../screens/CardListScreen";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const CardNavigator = () => {
    const colorScheme = useColorScheme();
    const homeStyle = colorScheme === "light" ? styles.homeStyle : styles.homeStyleDark;
    const IconColor = colorScheme === "light" ? colors.DARK : colors.PRINCETON_ORANGE;
    const user = useSelector(state => state.auth.user);


    return (
        <Stack.Navigator
            initialRouteName="CardList"
            screenOptions={{
                headerShadowVisible: true,
                headerStyle: homeStyle,
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen
                name="CardList"
                component={CardListScreen}
                initialParams={{userId : user.id}}
                options={({ navigation }) => ({
                    title: "",
                    headerTintColor: IconColor,
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("New Card")}>
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
                name="New Card"
                initialParams={{ userId: user.id }}
                component={NewCardScreen}
                options={{
                    title: "",
                    headerTintColor: IconColor,
                }}
            />
        </Stack.Navigator>
    )
};

export default CardNavigator;