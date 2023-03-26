import React, { useEffect } from "react";
import { Image, Button, FlatList, Text, View, ActivityIndicator, useWindowDimensions, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/actions/cart.action";
import styles from "../styles/styles";
import colors from "../styles/constants/colors";

const DetailsScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.products.selected);

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        console.log("first");
    }, []);

    const handleAddItem = () => {
        console.log("first")
        //dispatch(addItem(item));
    };

    const renderImage = ({ item }) => (
        <View style={{ width: width * 0.7, marginHorizontal: (width * 0.3) / 2 }} key={item.id}>
            <View style={{ borderRadius: 15, overflow: 'hidden' }}>
                <Image style={{ width: "100%", height: undefined, aspectRatio: 1 }} source={{ uri: item.secure_url }} />
            </View>

        </View>
    )

    if (!item) {
        return (
            <View style={styles.productsScreenSpinner}>
                <ActivityIndicator size="large" color={colors.PRINCETON_ORANGE} />
            </View>
        )
    } else {
        return (
            <ScrollView style={styles.detailScreenContainer}>
                <ScrollView>
                    <Image style={{height: height*0.5, width: "100%"}} source={{ uri: item.img }} />
                    <Image style={{height: height*0.5, width: "100%"}} source={{ uri: item.img }} />
                    <Image style={{height: height*0.5, width: "100%"}} source={{ uri: item.img }} />
                </ScrollView>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text>{item.price}</Text>
                <Button title="Add to cart" onPress={handleAddItem} />
            </ScrollView>
        )
    }
}

export default DetailsScreen;