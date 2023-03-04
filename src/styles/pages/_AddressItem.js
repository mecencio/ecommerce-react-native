import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    AddressItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        margin: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 6,
    },
    AddressItemOptionEdit: {
        paddingVertical: 4,
    },
    AddressItemOptionDelete: {
        paddingVertical: 4,
    },
})