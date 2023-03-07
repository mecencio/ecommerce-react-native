import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    loginScreenBackground: {
        flex: 1, 
        justifyContent: "center",
    },
    loginScreen: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: colors.BLACK_TRANSPARENT,
    },
    loginScreenImageContainer: {
        flex:1,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        marginTop: 70,
        maxHeight: 130,
        paddingVertical: 18,
    },
    loginScreenImage: {
        width: "90%",
        resizeMode: "contain",
    },
    loginScreenTitle: {
        fontSize: 24,
        marginBottom: 18,
        textAlign: "center",
        color: colors.PRINCETON_ORANGE,
    },
    loginScreenContainer: {
        width: "80%",
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: colors.TAWNY,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.BLACK_TRANSPARENT,
    },
    loginScreenPrompt: {
        alignItems: "center",
    },
    loginScreenPromptMessage: {
        fontSize: 16,
        color: "#333",
    },
    loginScreenPromptButton: {
        fontSize: 16,
    },
    loginScreenButton: {
        width: "100%",
        backgroundColor: colors.TAWNY,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        marginVertical: 10,
        borderRadius: 10,
    },
    loginScreenText: {
        color: "white"
    },
    loginScreenForgotPasswordContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
    },
    loginScreenForgotPasswordText: {
        color: colors.SELECTIVE_YELLOW,
    },
    loginScreenSecondButton: {
        width: "100%",
        backgroundColor: colors.SELECTIVE_YELLOW_SEMITRANSPARENT,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        marginVertical: 10,
        borderRadius: 10,
    },
    loginScreenSecondText: {
        color: "black"
    },
})