import { StyleSheet } from "react-native";
import colors from "./constants/colors";

export default StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
    },
    header: {
        fontSize: 18,
    },
    detail: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
    },
})