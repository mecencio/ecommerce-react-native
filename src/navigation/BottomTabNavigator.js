import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons"
import IndexNavigator from "./IndexNavigator";
import styles from "../styles/styles";
import CartNavigator from "./CartNavigator";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName="Index"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
        >
            <BottomTabs.Screen
                name="Index"
                component={IndexNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.tabBarIcon}>
                            <Ionicons name="home" size={25} color="#c19963" />
                            <Text style={styles.tabBarText}>Home</Text>
                        </View>
                    )
                }}
            />
            <BottomTabs.Screen
                name="Cart"
                component={CartNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.tabBarIcon}>
                            <Ionicons name="cart" size={25} color="#c19963" />
                            <Text style={styles.tabBarText}>Cart</Text>
                        </View>
                    )
                }}
            />
        </BottomTabs.Navigator>
    )
}