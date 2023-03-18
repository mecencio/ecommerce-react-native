import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    tabBar: {
        backgroundColor: "#fff",
        height: 55,
        position: "absolute",
        shadowColor: colors.COCOA_BROWN,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        borderTopColor: colors.PRINCETON_ORANGE,
        borderTopWidth: 1,
    },
    tabBarIcon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    tabBarText: {
        color: colors.TAWNY,
    },

    //Dark
    tabBarDark: {
        backgroundColor: colors.DARK,
        height: 55,
        position: "absolute",
        shadowColor: colors.PRINCETON_ORANGE,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        borderTopColor: colors.PRINCETON_ORANGE,
        borderTopWidth: 1,
    },
    tabBarTextDark: {
        color: colors.XANTHOUS,
    },
})