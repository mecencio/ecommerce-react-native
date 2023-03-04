import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    profileScreen: {
        flex: 1,
        padding: 12,
        backgroundColor: colors.background,
        paddingBottom: 120,
    },
    profileScreenHeader: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        marginHorizontal: 20,
        borderBottomColor: colors.CHOCOLATE_COSMOS,
        borderBottomWidth: 1,
    },
    profileScreenHeaderText: {
        marginLeft: 14,
    },
    profileScreenOptions: {
        backgroundColor: colors.LIGHT_ORANGE,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 15,
        paddingHorizontal: 12,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    profileScreenOptionsText: {
        marginLeft: 14,
    },
    profileScreenOptionsIcon: {
        alignSelf: "center",
        padding: 3,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.SALMON_PINK,
    },

    //Dark
    profileScreenDark: {
        flex: 1,
        padding: 12,
        backgroundColor: colors.background,
        paddingBottom: 120,
    },
    profileScreenHeaderDark: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 70,
        borderBottomColor: colors.CHOCOLATE_COSMOS,
        borderBottomWidth: 1,
    },
    profileScreenHeaderTextDark: {
    },
    profileScreenOptionsDark: {
        backgroundColor: colors.LIGHT_ORANGE,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 15,
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    profileScreenOptionsTextDark: {},
})