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
    },
    authScreenContainer: {
        width: "80%",
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.background,
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
        backgroundColor: colors.primary,
        marginVertical: 20,
    },
    //Dark
    authScreenDark: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    authScreenTitleDark: {
        fontSize: 24,
        marginBottom: 18,
        textAlign: "center",
        color: "white",
    },
    authScreenContainerDark: {
        width: "80%",
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: colors.SALMON_PINK,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.CHOCOLATE_COSMOS,
    },
    authScreenPromptDark: {
        alignItems: "center",
    },
    authScreenPromptMessageDark: {
        fontSize: 16,
        color: "#333",
    },
    authScreenPromptButtonDark: {
        fontSize: 16,
        color:"white",
    },
    authScreenButtonDark: {
        backgroundColor: colors.CHOCOLATE_COSMOS,
        marginVertical: 20,
    },
})