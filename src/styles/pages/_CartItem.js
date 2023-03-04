import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    cartItem: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
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
})