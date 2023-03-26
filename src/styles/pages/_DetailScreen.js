import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    detailScreenContainer: {
        flex: 1,
        padding: 10,
        paddingBottom: 60,
        marginBottom: 10
    },
    detailScreenTitle: {
        paddingVertical: 5,
        marginBottom: 5,
        fontSize: 24,
        fontWeight: "bold",
    },
    detailScreenPrice: {
        fontSize: 28,
        fontWeight: "bold",
        marginVertical: 10,
    },
    detailScreenTitleDescription: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 16,
        marginBottom: 10,
    },
    detailScreenDescription: {
        padding: 10,
    },
    detailScreenShippingDark: {
        color: "green",
        fontWeight: "bold",
        fontSize: 12,
        marginBottom: 10,
    },

    // DARK
    detailScreenContainerDark: {
        flex: 1,
        padding: 10,
        paddingBottom: 60,
        marginBottom: 10,
        backgroundColor: colors.DARK,
    },
    detailScreenTitleDark: {
        paddingVertical: 5,
        marginBottom: 5,
        fontSize: 24,
        fontWeight: "bold",
        color: colors.COCOA_BROWN,
    },
    detailScreenPriceDark: {
        fontSize: 28,
        fontWeight: "bold",
        marginVertical: 10,
        color: colors.COCOA_BROWN,
    },
    detailScreenTitleDescriptionDark: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 16,
        marginBottom: 10,
        color: colors.COCOA_BROWN,
    },
    detailScreenDescriptionDark: {
        padding: 10,
        color: colors.PRINCETON_ORANGE,
    },
    detailScreenShippingDark: {
        color: "lightgreen",
        fontWeight: "bold",
        fontSize: 16,
        paddingBottom: 15,
    },
})