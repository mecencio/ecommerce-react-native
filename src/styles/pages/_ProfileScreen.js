import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    profileScreen: {
        flex: 1,
        padding: 12,
        paddingBottom: 120,
    },
    profileScreenHeader: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 90,
        marginHorizontal: 20,
        borderBottomColor: colors.TAWNY,
        borderBottomWidth: 1,
    },
    profileScreenImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    profileScreenEmptyImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: colors.TAWNY,
        justifyContent: "center",
        alignItems: "center"
    },
    profileScreenImageText: {},
    profileScreenHeaderText: {
        marginLeft: 14,
    },
    profileScreenOptions: {
        backgroundColor: colors.XANTHOUS_TRANSPARENT,
        borderWidth: 1,
        borderColor: colors.PRINCETON_ORANGE,
        borderRadius: 10,
        marginVertical: 7,
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
        borderColor: colors.SELECTIVE_YELLOW,
    },

    //Dark
    profileScreenDark: {
        flex: 1,
        padding: 12,
        backgroundColor: colors.DARK,
        paddingBottom: 120,
    },
    profileScreenHeaderDark: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 90,
        marginHorizontal: 20,
        borderBottomColor: colors.TAWNY,
        borderBottomWidth: 1,
    },
    profileScreenImageTextDark:{
        color: colors.PRINCETON_ORANGE,
    },
    profileScreenHeaderTextDark: {
        marginLeft: 14,
        color: colors.PRINCETON_ORANGE,
    },
    profileScreenOptionsDark: {
        backgroundColor: colors.TAWNY,
        borderWidth: 1,
        borderColor: colors.PRINCETON_ORANGE,
        borderRadius: 10,
        marginVertical: 7,
        marginHorizontal: 15,
        paddingHorizontal: 12,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    profileScreenOptionsTextDark: {
        marginLeft: 14,
        color: colors.XANTHOUS
    },
    profileScreenOptionsIconDark: {
        alignSelf: "center",
        padding: 3,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.SELECTIVE_YELLOW,
    },
})