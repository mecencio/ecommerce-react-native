import { StyleSheet } from "react-native";
import colors from "./constants/colors";

export default StyleSheet.create({
    productsItem: {
        flex: 1,
        marginBottom: 30,
        // shadowColor: "black",
        // shadowOpacity: 0.5,
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 5,
        // elevation: 5,
    },
    productsItemContainer: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 5,
        paddingBottom: 10,
    },
    productsImageContainer: {
        marginBottom: 10,
    },
    productsTextContainer: {
        flex: 1,
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 5,
    },
    productsTextTitle: {
        fontWeight: "bold",
        color: colors.primary,
        marginVertical: 10,
    },
    productsTextPrice: {
        fontStyle: "italic",
        marginVertical: 10,
    },
    productsImage: {
        height: 150,
        width: "100%",
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
})