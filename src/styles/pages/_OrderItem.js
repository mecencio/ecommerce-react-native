import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    orderItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        margin: 10,
        borderColor: colors.TAWNY,
        borderWidth: 1,
        borderRadius: 6,
    },
    orderItemDate: {
        textAlign: "center",
        fontSize: 18,
        borderBottomColor: colors.COCOA_BROWN,
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    orderItemContainer: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.PRINCETON_ORANGE,
    },
    orderItemImage: {
        borderRadius: 50,
        width: 70,
        height: 70,
    },
    orderItemHeader: {
        fontSize: 18,
        paddingVertical: 10,
    },
    orderItemDetail: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
    },
    orderItemText: {},
    orderItemTotal: {
        fontSize: 18,
        textAlign: "right",
        paddingTop: 12,
        paddingBottom: 7,
    },

    //Dark
    orderItemDark: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        margin: 10,
        borderColor: colors.TAWNY,
        borderWidth: 1,
        borderRadius: 6,
    },
    orderItemDateDark: {
        textAlign: "center",
        fontSize: 18,
        borderBottomColor: colors.SELECTIVE_YELLOW,
        borderBottomWidth: 1,
        paddingVertical: 10,
        color: colors.PRINCETON_ORANGE,
    },
    orderItemHeaderDark: {
        color: colors.PRINCETON_ORANGE,
        paddingVertical: 10,
        fontSize: 18,
    },
    orderItemTextDark: {
        color: colors.SELECTIVE_YELLOW,
    },
    orderItemTotalDark: {
        fontSize: 18,
        textAlign: "right",
        paddingTop: 12,
        paddingBottom: 7,
        color: colors.PRINCETON_ORANGE,
    },
})