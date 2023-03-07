import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    inputFormControl: {
        width: "100%",
    },
    inputLabel: {
        marginVertical: 8,
        color: colors.SELECTIVE_YELLOW,
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: colors.PRINCETON_ORANGE,
        borderBottomWidth: 1,
        marginBottom: 10,
        color: colors.XANTHOUS
    },
    inputErrorContainer: {
        marginTop: 6,
        marginBottom: 8,
    },
    inputErrorText: {
        color: colors.PRINCETON_ORANGE,
    },
})