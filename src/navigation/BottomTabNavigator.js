import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons"
import HomeNavigator from "./HomeNavigator";
import styles from "../styles/styles";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";
import AuthNavigator from "./AuthNavigator";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
        >
            <BottomTabs.Screen
                name="HomeTab"
                component={HomeNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.tabBarIcon}>
                            <Ionicons name="home-outline" size={25} color="#c19963" />
                            <Text style={styles.tabBarText}>Home</Text>
                        </View>
                    )
                }}
            />
            <BottomTabs.Screen
                name="CartTab"
                component={CartNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.tabBarIcon}>
                            <Ionicons name="cart-outline" size={25} color="#c19963" />
                            <Text style={styles.tabBarText}>Cart</Text>
                        </View>
                    )
                }}
            />
            <BottomTabs.Screen
                name="OrdersTab"
                component={OrdersNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.tabBarIcon}>
                            <Ionicons name="albums-outline" size={25} color="#c19963" />
                            <Text style={styles.tabBarText}>Orders</Text>
                        </View>
                    )
                }}
            />
            <BottomTabs.Screen
                name="AuthTab"
                component={AuthNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.tabBarIcon}>
                            <Ionicons name="log-in-outline" size={25} color="#c19963" />
                            <Text style={styles.tabBarText}>Auth</Text>
                        </View>
                    )
                }}
            />
        </BottomTabs.Navigator>
    )
}