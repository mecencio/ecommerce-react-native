import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    tabBar: {
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 50,
        marginHorizontal: 10,
        height: 55,
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
    tabBarText: {
        color: colors.primary
    },
})