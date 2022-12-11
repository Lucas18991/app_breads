import { StyleSheet, Button, FlatList } from "react-native";
import React from "react";
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import BreadItem from "../components/BreadItem";
import { BREADS } from "../data/bread";
import { useSelector, useDispatch, connect } from "react-redux";

const CategoryBreadScreen = ({ navigation, route }) => {
  const category = useSelector((state) => state.categories.selected);
  const categoryBreads = useSelector((state) => state.categories.filteredBread);
  const dispatch = useDispatch();

  const breads = BREADS.filter(
    (bread) => bread.category === route.params.category
  );
  const renderGridBread = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelectedCategory} />
  );
  const handleSelectedCategory = (item) => {
    navigation.navigate("Details", {
      categoryID: item.id,
      name: item.name,
    });
  };

  return (
    <FlatList
      data={categoryBreads}
      keyExtractor={(item) => item.id}
      renderItem={renderGridBread}
      numColumns={2}
    />
  );
};

export default CategoryBreadScreen;
