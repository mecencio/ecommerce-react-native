import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    productsItem: {
        flex: 1,
        marginVertical: 10,
    },
    productsItemContainer: {
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: colors.BLACK_TRANSPARENT,
        paddingBottom: 10,
    },
    productsImageContainer: {
        marginHorizontal: 10,
    },
    productsImage: {
        height: 130,
        width: 130,
        borderRadius: 20,
    },
    productsTextContainer: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 5,
    },
    productsTextTitle: {
        marginVertical: 10,
    },
    productsTextPrice: {
        fontWeight: "bold",
        fontSize: 18,
        marginVertical: 10,
    },

    //DARK
    productsItemContainerDark: {
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: colors.SELECTIVE_YELLOW_SEMITRANSPARENT,
        paddingBottom: 10,
    },
    productsImageDark: {
        height: 130,
        width: 130,
        borderRadius: 20,
        borderColor: colors.SELECTIVE_YELLOW,
        borderWidth: 1,
    },
    productsTextContainer: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 5,
    },
    productsTextTitleDark: {
        marginVertical: 10,
        color: colors.COCOA_BROWN,
    },
    productsTextPriceDark: {
        fontWeight: "bold",
        fontSize: 18,
        marginVertical: 10,
        color: colors.COCOA_BROWN,
    },
})