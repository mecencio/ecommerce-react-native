import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    productsScreen: {
        flex: 1,
        marginBottom: 50,
    },
    productsScreenSpinner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    productsScreenSortContainer: {
        paddingVertical: 8,
        flexDirection: "row",
        justifyContent: "space-around",
        color: "white",
        borderBottomColor: colors.SELECTIVE_YELLOW_SEMITRANSPARENT,
        borderBottomWidth: 1,
    },
    productsScreenSortText: {
        color: colors.COCOA_BROWN,
    },
    productsScreenBottomContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginBottom: 20
    },
    productsScreenBottomPrevious: {
        fontStyle: "italic",
        paddingRight: 15,
    },
    productsScreenBottomNext: {
        fontStyle: "italic",
        paddingRight: 15,
    },

    // DARK
    productsScreenDark: {
        flex: 1,
        marginBottom: 50,
        backgroundColor: colors.DARK,
    },
    productsScreenBottomPreviousDark: {
        color: colors.PRINCETON_ORANGE,
        fontStyle: "italic",
        paddingRight: 15,
    },
    productsScreenBottomNextDark: {
        color: colors.PRINCETON_ORANGE,
        fontStyle: "italic",
        paddingRight: 15,
    },
    productsScreenSpinnerDark: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.DARK,
    },
})