import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoriesScreenContainer: {
        marginTop: 15,
        padding: 15,
        height: 150,
    },
})