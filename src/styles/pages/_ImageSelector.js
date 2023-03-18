import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    imageSelector: {
        marginBottom: 10,
    },
    imageSelectorPreview: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        width: 200,
        height: 200,
        marginBottom: 10,
        borderColor: colors.COCOA_BROWN,
        borderWidth: 1,
        borderRadius: 500,
    },
    imageSelectorText:{
        textAlign: "center",
        paddingHorizontal: 5,
        color: colors.TAWNY,
    },
    imageSelectorImage: {
        width: 200,
        height: 200,
        borderRadius: 500,
    },

    //DARK
    imageSelectorPreviewDark: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        width: 200,
        height: 200,
        marginBottom: 10,
        borderColor: colors.PRINCETON_ORANGE,
        borderWidth: 1,
        borderRadius: 500,
    },
    imageSelectorTextDark:{
        textAlign: "center",
        paddingHorizontal: 5,
        color: colors.SELECTIVE_YELLOW,
    },
})