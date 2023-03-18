import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    NewAddressScreen: {
        flex: 1,
    },
    NewAddressScreenContainer: {
        flex: 1,
        margin: 20,
        marginBottom: 80,
    },
    NewAddressScreenInputContainer: {
        paddingVertical: 10,
    },
    NewAddressScreenLabel: {
        color: colors.TAWNY,
        paddingHorizontal: 5,
    },
    NewAddressScreenInput: {
        borderRadius: 5,
        borderColor: colors.COCOA_BROWN, 
        borderWidth: 1, 
        padding: 5,
        marginVertical: 10,
    },
    NewAddressScreenButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
    },

    //DARK
    NewAddressScreenDark: {
        flex: 1,
        backgroundColor: colors.DARK,
    },
    NewAddressScreenLabelDark: {
        color: colors.SELECTIVE_YELLOW,
        paddingHorizontal: 5,
    },
    NewAddressScreenInputDark: {
        borderRadius: 5,
        borderColor: colors.COCOA_BROWN, 
        borderWidth: 1, 
        padding: 5,
        marginVertical: 10,
        color: "white"
    },
})