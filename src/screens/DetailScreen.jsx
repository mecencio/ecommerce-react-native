import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/actions/cart.action";
import styles from "../styles/styles";

const DetailsScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.products.selected);

    useEffect(() => {
        console.log("first");
    }, []);

    const handleAddItem = () => {
        console.log("first")
        //dispatch(addItem(item));
    };

    return (
        <View style={styles.detailScreenContainer}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
            <Button title="Add to cart" onPress={handleAddItem}/>
        </View>
    )
}

export default DetailsScreen;