import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View, TouchableOpacity, Text, useColorScheme } from "react-native";
import ProductsItem from "../components/ProductsItem";
import { useSelector, useDispatch } from "react-redux";
import { selectedProduct, filteredProduct, setOrder } from "../store/actions/products.action";
import styles from "../styles/styles";
import colors from "../styles/constants/colors";

const ProductsScreen = ({ navigation }) => {
    const colorScheme = useColorScheme();
    const productsScreenBottomPrevious = colorScheme === "light" ? styles.productsScreenBottomPrevious : styles.productsScreenBottomPreviousDark;
    const productsScreenBottomNext = colorScheme === "light" ? styles.productsScreenBottomNext : styles.productsScreenBottomNextDark;
    const productsScreen = colorScheme === "light" ? styles.productsScreen : styles.productsScreenDark;

    const dispatch = useDispatch();
    const categoryProducts = useSelector(state => state.products.filteredProduct);
    const max = useSelector(state => state.products.totalProducts);
    const category = useSelector(state => state.categories.selected);
    const loading = useSelector(state => state.products.loading);
    const [offset, setOffset] = useState(0);
    const [sort, setSort] = useState("relevance");

    useEffect(() => {
        dispatch(filteredProduct(category.id, offset, sort));
    }, [offset, sort]);

    const handleSetSort = (selectedSort) => {
        setSort(selectedSort);
        setOffset(0);
    }

    const handleSelectedProduct = (item) => {
        dispatch(selectedProduct(item));
        navigation.navigate("Details", {
            name: ""
        })
    }

    const renderProductItem = ({ item }) => (
        <ProductsItem item={item} onSelected={handleSelectedProduct} />
    );

    if (loading === true) {
        return (
            <View style={styles.productsScreenSpinner}>
                <ActivityIndicator size="large" color={colors.PRINCETON_ORANGE} />
            </View>
        )
    } else {
        return (
            <View style={productsScreen}>
                <View style={styles.productsScreenSortContainer}>
                    <Text style={styles.productsScreenSortText}>Order by: </Text>
                    <TouchableOpacity onPress={() => handleSetSort("relevance")}>
                        <Text style={styles.productsScreenSortText}>Relevance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSetSort("price_asc")}>
                        <Text style={styles.productsScreenSortText}>Min price</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSetSort("price_desc")}>
                        <Text style={styles.productsScreenSortText}>Max Price</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={categoryProducts}
                    renderItem={renderProductItem}
                    keyExtractor={item => item.id}
                    ListFooterComponent={() => {
                        return (
                            <View style={styles.productsScreenBottomContainer}>
                                {offset > 0 &&
                                    <TouchableOpacity onPress={() => setOffset(offset - 50)}>
                                        <Text style={productsScreenBottomPrevious}>Previous page</Text>
                                    </TouchableOpacity>
                                }
                                {offset <= (max - 50) &&
                                    <TouchableOpacity onPress={() => setOffset(offset + 50)}>
                                        <Text style={productsScreenBottomNext}>Next page</Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}

export default ProductsScreen;