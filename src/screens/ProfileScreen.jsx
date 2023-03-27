import React from 'react';
import { Text, View, Image, TouchableOpacity, useColorScheme } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/actions/auth.action';
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from '../styles/styles';
import colors from '../styles/constants/colors';


const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const colorScheme = useColorScheme();
    const ProfileScreen = colorScheme === 'light' ? styles.profileScreen : styles.profileScreenDark;
    const ProfileScreenHeader = colorScheme === 'light' ? styles.profileScreenHeader : styles.profileScreenHeaderDark;
    const ProfileScreenImageText = colorScheme === 'light' ? styles.profileScreenImageText : styles.profileScreenImageTextDark;
    const ProfileScreenHeaderText = colorScheme === 'light' ? styles.profileScreenHeaderText : styles.profileScreenHeaderTextDark;
    const ProfileScreenOptions = colorScheme === 'light' ? styles.profileScreenOptions : styles.profileScreenOptionsDark;
    const ProfileScreenOptionsText = colorScheme === 'light' ? styles.profileScreenOptionsText : styles.profileScreenOptionsTextDark;
    const iconColor = colorScheme === "light" ? colors.TAWNY : colors.XANTHOUS;

    const user = useSelector(state => state.auth.user)
    const image = useSelector(state => state.auth.user?.image)

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <View style={ProfileScreen}>
            <View style={ProfileScreenHeader}>
                {image ? (
                    <TouchableOpacity onPress={() => navigation.navigate("NewImage")} style={styles.profileScreenEmptyImage} >
                        <Image style={styles.profileScreenImage} source={{ uri: image }} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => navigation.navigate("NewImage")} style={styles.profileScreenEmptyImage} >
                        <Text style={ProfileScreenImageText}>New Image</Text>
                    </TouchableOpacity>
                )}
                <Text style={ProfileScreenHeaderText}>{user.firstname} {user.lastname}</Text>
            </View>
            <View >
                <TouchableOpacity onPress={() => navigation.navigate("CardTab")} style={ProfileScreenOptions}>
                    <Ionicons name="card-outline" size={24} color={iconColor} />
                    <Text style={ProfileScreenOptionsText}>Cards</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("AddressTab")} style={ProfileScreenOptions}>
                    <Ionicons name="location-outline" size={24} color={iconColor} />
                    <Text style={ProfileScreenOptionsText}>Adresses</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogout} style={ProfileScreenOptions}>
                    <Ionicons name="log-out-outline" size={24} color={iconColor} />
                    <Text style={ProfileScreenOptionsText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileScreen;