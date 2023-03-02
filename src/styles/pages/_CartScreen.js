import { StyleSheet } from "react-native";
import colors from "./constants/colors";

export default StyleSheet.create({
    cartScreenContainer: {
        flex: 1,
        padding: 12,
        backgroundColor: colors.background,
        paddingBottom: 120,
    },
    cartScreenList: {
        flex: 1,
    },
    cartScreenFooter: {
        padding: 12,
        borderTopColor: "#ccc",
        borderTopWidth: 1,
    },
    cartScreenConfirm: {
        backgroundColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cartScreenTotal: {
        flexDirection: "row",
    },
    cartScreenText: {
        fontSize: 18,
        padding: 8,
    },
})