import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    cartItem: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.PRINCETON_ORANGE,
    },
    cartItemImage: {
        borderRadius: 50,
        width: 70,
        height: 70,
    },
    cartItemHeader: {
        fontSize: 18,
    },
    cartItemDetail: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cartItemText: {},

    // Dark
    cartItemHeaderDark: {
        color: colors.PRINCETON_ORANGE,
        fontSize: 18,
    },
    cartItemTextDark: {
        color: colors.SELECTIVE_YELLOW,
    },
})