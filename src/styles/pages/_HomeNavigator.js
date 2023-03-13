import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    homeStyle: {
        backgroundColor: colors.PRINCETON_ORANGE,
        paddingTop: 0,
    },
    navTextInput: {
        height: 30,
        borderWidth: 1,
        borderColor: '#cecece',
        marginBottom: 10,
        marginHorizontal: 10,
        color: colors.PRINCETON_ORANGE,
    },

    //Dark
    homeStyleDark: {
        backgroundColor: "black",
        paddingTop: 0,
    },
})