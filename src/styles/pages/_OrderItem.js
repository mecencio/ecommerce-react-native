import { StyleSheet } from "react-native";
import colors from "./constants/colors";

export default StyleSheet.create({
    OrderItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        margin: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 6,
    },
    OrderItemDate: {
        fontSize: 18,
    },
    OrderItemTotal: {
        fontSize: 18,
    },
})