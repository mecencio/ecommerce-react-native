import { View, Text, useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons"
import HomeNavigator from "./HomeNavigator";
import styles from "../styles/styles";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";
import ProfileNavigator from "./ProfileNavigator";
import AddressNavigator from "./AddressNavigator";
import colors from "../styles/constants/colors";

const BottomTabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
    const colorScheme = useColorScheme();
    const tabBar = colorScheme === "light" ? styles.tabBar : styles.tabBarDark;

    return (
        <BottomTabs.Navigator
            initialRouteName="HomeTab"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: tabBar,
            }}
        >
            <BottomTabs.Screen
                name="HomeTab"
                component={HomeNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.tabBarIcon}>
                            <Ionicons name="home-outline" size={25} color={colors.PRINCETON_ORANGE} />
                            <Text style={styles.tabBarText}>Home</Text>
                        </View>
                    ),
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
                name="ProfileTab"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.tabBarIcon}>
                            <Ionicons name="person-circle-outline" size={25} color="#c19963" />
                            <Text style={styles.tabBarText}>Profile</Text>
                        </View>
                    )
                }}
            />
        </BottomTabs.Navigator>
    )
}

export default BottomTabNavigator;