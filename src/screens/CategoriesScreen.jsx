import React from "react";
import { View, FlatList, Text, useColorScheme } from "react-native";
import CategoriesItem from "../components/CategoriesItem";
import { useSelector, useDispatch } from "react-redux";
import { selectedCategory } from "../store/actions/category.action";
import styles from "../styles/styles";

const CategoriesScreen = ({ navigation }) => {
    const colorScheme = useColorScheme();
    const categoriesScreen = colorScheme === "light" ? styles.categoriesScreen : styles.categoriesScreenDark;
    const categoriesScreenText = colorScheme === "light" ? styles.categoriesScreenText : styles.categoriesScreenTextDark;

    const categories = useSelector(state => state.categories.categories);
    const dispatch = useDispatch();

    const handleSelectedCategory = item => {
        dispatch(selectedCategory(item.id));
        navigation.navigate("Products", {
            title: item.title,
        });
    }

    const renderCategoriesItem = ({ item }) => (
        <View style={styles.categoriesScreenRender}>
            <CategoriesItem item={item} onSelected={handleSelectedCategory} />
        </View>
    )

    return (
        <View style={categoriesScreen}>
            <Text style={categoriesScreenText}>CATEGORIES</Text>
            <FlatList
                data={categories}
                renderItem={renderCategoriesItem}
                keyExtractor={item => item.id}
                initialNumToRender={7}
            />
        </View>
    )
};

export default CategoriesScreen;