import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    cardListScreen: {
        flex: 1,
        paddingBottom: 70,
    },
    cardListScreenText: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontWeight: "bold",
        fontSize: 16,
    },

    // DARK
    cardListScreenDark: {
        flex: 1,
        paddingBottom: 70,
        backgroundColor: colors.DARK,
    },
    cardListScreenTextDark: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontWeight: "bold",
        fontSize: 16,
        color: colors.PRINCETON_ORANGE
    },
});