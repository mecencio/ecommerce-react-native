import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    AddressItem: {
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
    AddressItemOptionEdit: {
        paddingVertical: 4,
    },
    AddressItemOptionDelete: {
        paddingVertical: 4,
    },

    //DARK
    AddressItemDark: {
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