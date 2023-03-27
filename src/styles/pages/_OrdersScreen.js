import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    ordersScreen: {
        flex: 1,
        padding: 12,
        paddingBottom: 70,
    },
    ordersScreenNoOrder: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    ordersScreenNoOrderText: {},

    //Dark
    ordersScreenDark: {
        flex: 1,
        padding: 12,
        backgroundColor: colors.DARK,
        paddingBottom: 70,
    },
    ordersScreenNoOrderDark: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.DARK,
    },
    ordersScreenNoOrderTextDark: {
        color: colors.PRINCETON_ORANGE,
    },
})