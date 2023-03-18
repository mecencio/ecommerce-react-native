import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    mapPreview: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        width: "100%",
        height: 500
    },
    mapImage: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        borderColor: colors.PRINCETON_ORANGE,
        borderWidth: 1,
    }
})