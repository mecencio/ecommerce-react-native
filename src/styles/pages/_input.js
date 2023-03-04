import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    inputFormControl: {
        width: "100%",
    },
    inputLabel: {
        marginVertical: 8,
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    inputErrorContainer: {
        marginTop: 6,
        marginBottom: 8,
    },
    inputErrorText: {
        color: colors.primary,
    },
})