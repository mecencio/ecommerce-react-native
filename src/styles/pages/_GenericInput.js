import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    genericInputInputContainer: {
        paddingVertical: 10,
    },
    genericInputLabel: {
        color: colors.DARK,
        paddingHorizontal: 5,
    },
    genericInputInput: {
        borderRadius: 5,
        borderColor: colors.COCOA_BROWN,
        borderWidth: 1,
        padding: 5,
        marginVertical: 10,
    },

    //DARK
    genericInputLabelDark: {
        color: colors.SELECTIVE_YELLOW,
        paddingHorizontal: 5,
    },
    genericInputInputDark: {
        borderRadius: 5,
        borderColor: colors.COCOA_BROWN,
        borderWidth: 1,
        padding: 5,
        marginVertical: 10,
        color: "white"
    },
})