import { StyleSheet } from "react-native";
import colors from "./constants/colors";

export default StyleSheet.create({
    // // CategoriesScreen.js
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoriesScreenContainer: {
        marginTop: 15,
        padding: 15,
        height: 150,
    },
    // BottomTabNavigator.js
    tabBar: {
        backgroundColor: "#fff",
        paddingTop: 15,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        height: 85,
        position: "absolute",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    tabBarIcon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    // CategoriesItem.js
    categoryItem: {
        flex: 1,
    },
    categoryItemContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 15,
    },
    categoryItemTextContainer: {
        width: "60%",
        height: "78%",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#c19963",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,
    },
    categoryItemImageContainer: {
        width: "40%",
        height: "100%",
    },
    categoryItemImage: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        shadowColor: "white",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,
    },
});