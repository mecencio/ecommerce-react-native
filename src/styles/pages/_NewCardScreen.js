import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    newCardScreen: {
        flex: 1,
    },
    newCardScreenContainer: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 30,
        marginBottom: 80,
    },
    newCardScreenInputContainer: {
        paddingVertical: 10,
    },
    newCardScreenErrorText: {
        fontSize: 12,
        fontStyle: "italic",
        color: "red",
        textAlign: "center",
        marginBottom: 12,
    },
    newCardScreenLabel: {
        color: colors.TAWNY,
        paddingHorizontal: 5,
    },
    newCardScreenInput: {
        borderRadius: 5,
        borderColor: colors.COCOA_BROWN, 
        borderWidth: 1, 
        padding: 5,
        marginVertical: 10,
    },
    newCardScreenSubcontainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },

    //DARK
    newCardScreenDark: {
        flex: 1,
        backgroundColor: colors.DARK,
    },
    newCardScreenLabelDark: {
        color: colors.SELECTIVE_YELLOW,
        paddingHorizontal: 5,
    },
    newCardScreenInputDark: {
        borderRadius: 5,
        borderColor: colors.COCOA_BROWN, 
        borderWidth: 1, 
        padding: 5,
        marginVertical: 10,
        color: "white"
    },
})