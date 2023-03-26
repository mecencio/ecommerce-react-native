import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, View, TextInput, useColorScheme } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"
import CategoriesScreen from "../screens/CategoriesScreen";
import DetailsScreen from "../screens/DetailScreen";
import ProductsScreen from "../screens/ProductsScreen";
import colors from "../styles/constants/colors";
import styles from "../styles/styles";

const Stack = createNativeStackNavigator();

export default HomeNavigator = () => {
    const colorScheme = useColorScheme();
    const homeStyle = colorScheme === "light" ? styles.homeStyle : styles.homeStyleDark;
    const IconColor = colorScheme === "light" ? colors.DARK : colors.PRINCETON_ORANGE;
    const [text, setText] = useState("");
    const [touched, setTouched] = useState(false);

    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerShadowVisible: true,
                headerStyle: homeStyle,
                headerTitleAlign: "center",
                headerRight: () => (
                    <View>
                        <TouchableOpacity onPress={() => console.log("cart")}>
                            <Ionicons
                                name="cart-outline"
                                color={IconColor}
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>
                ),
            }}
        >
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: "",
                    headerTintColor: IconColor,
                }}
            />
            <Stack.Screen
                name="Products"
                component={ProductsScreen}
                options={{
                    title: "",
                    headerTintColor: IconColor,
                }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={({ route }) => ({
                    title: route.params.name,
                    headerTintColor: IconColor,
                })}
            />
        </Stack.Navigator>
    )
}