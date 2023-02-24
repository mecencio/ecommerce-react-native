import React from "react";
import { View, FlatList } from "react-native";
import CategoriesItem from "../components/CategoriesItem";
import { useSelector, useDispatch } from "react-redux";
import { selectedCategory } from "../store/actions/category.action";
import styles from "../styles/styles";

const CategoriesScreen = ({ navigation }) => {
    const categories = useSelector(state => state.categories.categories);
    const dispatch = useDispatch();

    const handleSelectedCategory = item => {
        dispatch(selectedCategory(item.id));
        //navigation.navigate();
    }

    const renderCategoriesItem = ({ item }) => (
        <View style={styles.categoriesScreenContainer}>
            <CategoriesItem item={item} onSelected={handleSelectedCategory} />
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={renderCategoriesItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
};

export default CategoriesScreen;