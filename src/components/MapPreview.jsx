import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { API_KEY } from '../env/database';
import styles from '../styles/styles';

const MapPreview = ({ location, children }) => {
    const mapPreview =location 
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=18&size=1280x1080&maptype=roadmap&markers=color:orange%7Clabel:You%7C${location.lat},${location.lng}&key=${API_KEY}` 
    : "";


    return (
        <View style={styles.mapPreview}>
            { location ? (
            <Image style={styles.mapImage} source={{uri : mapPreview }} />
            ) : 
                children
            }
        </View>
    )
}

export default MapPreview;