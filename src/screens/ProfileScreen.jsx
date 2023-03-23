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
    const image = useSelector(state => state.image.image)

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <View style={ProfileScreen}>
            <View style={ProfileScreenHeader}>
                { image ? (
                    <Image style={styles.profileScreenImage} source={{ uri: image }} />
                ) : (
                    <TouchableOpacity onPress={() => navigation.navigate("NewImage")} style={styles.profileScreenEmptyImage} >
                        <Text style={ProfileScreenImageText}>New Image</Text>
                    </TouchableOpacity>
                    // <Ionicons name="person-circle-outline" size={56} color={iconColor} onPress={() => navigation.navigate("NewImage")}/>
                )}
                <Text style={ProfileScreenHeaderText}>{user.firstname}NICOLAS NAHUEL {user.lastname}</Text>
            </View>
            <View >
                <TouchableOpacity onPress={() => console.log("Mis datos")} style={ProfileScreenOptions}>
                    <Ionicons name="person-circle-outline" size={24} color={iconColor} />
                    <Text style={ProfileScreenOptionsText}>Mis datos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Seguridad")} style={ProfileScreenOptions}>
                    <Ionicons name="lock-closed-outline" size={24} color={iconColor} />
                    <Text style={ProfileScreenOptionsText}>Seguridad</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("CardTab")} style={ProfileScreenOptions}>
                    <Ionicons name="card-outline" size={24} color={iconColor} />
                    <Text style={ProfileScreenOptionsText}>Mis Tarjetas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("AddressTab")} style={ProfileScreenOptions}>
                    <Ionicons name="location-outline" size={24} color={iconColor} />
                    <Text style={ProfileScreenOptionsText}>Mis Direcciones</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogout} style={ProfileScreenOptions}>
                    <Ionicons name="log-out-outline" size={24} color={iconColor} />
                    <Text style={ProfileScreenOptionsText}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileScreen;