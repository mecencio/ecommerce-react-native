import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    newImageScreen: {},
    newImageScreenContainer: {
        flex: 1,
        margin: 30
    },
    newImageScreenLabel: {
        fontSize: 18,
        marginBottom: 16,
    },
    newImageScreenInput: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
    },

    //DARK
    newImageScreenDark: {
        backgroundColor: colors.DARK,
    },
    newImageScreenContainerDark: {
        flex: 1,
        margin: 30,
    },
    newImageScreenLabelDark: {
        fontSize: 18,
        marginBottom: 16,
        color: colors.SELECTIVE_YELLOW
    },
})