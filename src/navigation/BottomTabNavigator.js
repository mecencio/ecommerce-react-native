import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons"
import IndexNavigator from "./IndexNavigator";
import styles from "../styles/styles";

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
                            <Ionicons name="home" size={25} color="black" />
                            <Text>Home</Text>
                        </View>
                    )
                }}
            />
        </BottomTabs.Navigator>
    )
}