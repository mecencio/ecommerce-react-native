import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    categoriesScreen: {
        flex: 1,
        justifyContent: "space-between",
        marginBottom: 50,
    },
    categoriesScreenText: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontWeight: "bold",
        fontSize: 16,
    },
    categoriesScreenRender: {
        borderColor: colors.TAWNY,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: colors.XANTHOUS_TRANSPARENT,
        paddingHorizontal: 15,
        paddingVertical: 0,
        marginHorizontal: 20,
        marginVertical: 5,
        width: "90%",
    },

    // Dark
    categoriesScreenDark: {
        flex: 1,
        justifyContent: "space-between",
        marginBottom: 55,
        backgroundColor: colors.DARK,
    },
    categoriesScreenTextDark: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontWeight: "bold",
        fontSize: 16,
        color: colors.PRINCETON_ORANGE
    },
    // categoriesScreenContainer: {
    //     flex: 1,
    //     backgroundColor: colors.background,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // categoriesScreenRender: {
    //     marginTop: 15,
    //     padding: 15,
    //     height: 150,
    // },
})