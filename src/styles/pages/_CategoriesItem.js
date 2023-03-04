import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    categoryItem: {
        flex: 1,
    },
    categoryItemContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 15,
    },
    categoryItemTextContainer: {
        width: "60%",
        height: "78%",
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.primary,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.3,
        //shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 1,
    },
    categoryItemImageContainer: {
        width: "40%",
        height: "100%",
    },
    categoryItemImage: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        shadowColor: "white",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,
    },
})