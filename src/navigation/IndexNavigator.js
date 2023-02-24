import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";

const Stack = createNativeStackNavigator();

export default IndexNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen 
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: "Index",
                }}
            />
        </Stack.Navigator>
    )
}