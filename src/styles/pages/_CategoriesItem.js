import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    categoryItem: {},
    categoryItemContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    categoryItemImage: {
        width: 50,
        height: 50,
        marginRight: 15,
    },

    //DARK
    categoryItemTextDark: {
        color: colors.SELECTIVE_YELLOW,
    },
})