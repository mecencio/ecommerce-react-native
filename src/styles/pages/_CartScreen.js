import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    cartScreenEmptyCart: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    cartScreenEmptyCartText: {

    },
    cartScreenContainer: {
        flex: 1,
        padding: 12,
        paddingBottom: 70,
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
    cartScreenTextConfirm: {},

    //Dark
    cartScreenEmptyCartDark: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.DARK,
    },
    cartScreenEmptyCartTextDark: {
        color: colors.PRINCETON_ORANGE,
    },
    cartScreenContainerDark: {
        flex: 1,
        padding: 12,
        backgroundColor: colors.DARK,
        paddingBottom: 70,
    },
    cartScreenFooterDark: {
        padding: 12,
        borderTopColor: colors.XANTHOUS,
        borderTopWidth: 1,
    },
    cartScreenConfirmDark: {
        backgroundColor: colors.WHITE_TRANSPARENT,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cartScreenTextConfirmDark: {
        color: colors.PRINCETON_ORANGE,
    },
    cartScreenTextDark: {
        fontSize: 18,
        padding: 8,
        color: colors.PRINCETON_ORANGE,
    },
})