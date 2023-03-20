import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    cardItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 5,
        borderColor: colors.TAWNY,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: colors.XANTHOUS_TRANSPARENT
    },
    cardItemContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    cardItemIcon: {
        color: colors.TAWNY,
        padding: 10,
        marginRight: 20,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.TAWNY,
    },
    cardItemOptionDelete: {
        paddingVertical: 4,
    },

    //DARK
    cardItemIconDark: {
        color: colors.XANTHOUS,
        padding: 10,
        marginRight: 20,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.XANTHOUS,
    },
    cardItemDark: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 5,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: colors.COCOA_BROWN
    },
})