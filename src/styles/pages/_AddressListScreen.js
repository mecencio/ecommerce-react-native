import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    addressListScreen: {
        flex: 1,
        paddingBottom: 70,
    },
    addressListScreenText: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontWeight: "bold",
        fontSize: 16,
    },

    // DARK
    addressListScreenDark: {
        flex: 1,
        paddingBottom: 70,
        backgroundColor: colors.DARK,
    },
    addressListScreenTextDark: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontWeight: "bold",
        fontSize: 16,
        color: colors.PRINCETON_ORANGE
    },
});