import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    authScreenBackground: {
        flex: 1, 
        justifyContent: "center",
    },
    authScreen: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: colors.BLACK_TRANSPARENT,
    },
    authScreenImageContainer: {
        flex:1,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        marginTop: 70,
        maxHeight: 130,
        paddingVertical: 18,
    },
    authScreenImage: {
        width: "90%",
        resizeMode: "contain",
    },
    authScreenContainer: {
        width: "80%",
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderRadius: 10,
    },
    authScreenButton: {
        width: "100%",
        backgroundColor: colors.TAWNY,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        marginVertical: 10,
        borderRadius: 10,
    },
    authScreenText: {
        color: "white"
    },

    //DARK
    authScreenButtonDark: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        marginVertical: 10,
        borderRadius: 10,
        borderColor: colors.PRINCETON_ORANGE,
        borderWidth: 1,
        backgroundColor: colors.BLACK_TRANSPARENT
    },
    authScreenTextDark: {
        color: colors.PRINCETON_ORANGE,
    },
})