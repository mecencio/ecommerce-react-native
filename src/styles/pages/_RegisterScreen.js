import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    registerScreenBackground: {
        flex: 1, 
        justifyContent: "center",
    },
    registerScreen: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: colors.BLACK_TRANSPARENT,
    },
    registerScreenImageContainer: {
        flex:1,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        marginTop: 70,
        maxHeight: 130,
        paddingVertical: 18,
    },
    registerScreenImage: {
        width: "90%",
        resizeMode: "contain",
    },
    registerScreenTitle: {
        fontSize: 24,
        marginBottom: 18,
        textAlign: "center",
        color: colors.PRINCETON_ORANGE,
    },
    registerScreenContainer: {
        width: "80%",
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: colors.TAWNY,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.BLACK_TRANSPARENT,
    },
    registerScreenPrompt: {
        alignItems: "center",
    },
    registerScreenPromptMessage: {
        fontSize: 16,
        color: "#333",
    },
    registerScreenPromptButton: {
        fontSize: 16,
    },
    registerScreenButton: {
        width: "100%",
        backgroundColor: colors.TAWNY,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        marginVertical: 10,
        borderRadius: 10,
    },
    registerScreenText: {
        color: "white"
    },
    registerScreenSecondButton: {
        width: "100%",
        backgroundColor: colors.SELECTIVE_YELLOW_SEMITRANSPARENT,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        marginVertical: 10,
        borderRadius: 10,
    },
    registerScreenSecondText: {
        color: "black"
    },
})