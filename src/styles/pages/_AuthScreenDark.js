import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    authScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    authScreenTitle: {
        fontSize: 24,
        marginBottom: 18,
        textAlign: "center",
        color: colors.XANTHOUS,
    },
    authScreenContainer: {
        width: "80%",
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: colors.SELECTIVE_YELLOW,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.TAWNY,
    },
    authScreenPrompt: {
        alignItems: "center",
    },
    authScreenPromptMessage: {
        fontSize: 16,
        color: "#333",
    },
    authScreenPromptButton: {
        fontSize: 16,
    },
    authScreenButton: {
        backgroundColor: colors.TAWNY,
        marginVertical: 20,
    },
})