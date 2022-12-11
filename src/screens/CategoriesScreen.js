import { StyleSheet, Button, FlatList } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import GridItem from "../components/GridItem";
import { useDispatch, useSelector } from "react-redux";
import { selectedCategory } from "../store/actions/category.action";

const CategoriesScreen = ({ navigation }) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory(item.id));
    navigation.navigate("Bread", {
      name: item.title,
    });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />

    /*
    <View style={styles.container}>
      <Text style={styles.title}>CategoriesScreen</Text>
      <Button
        title="Go to Bread"
        onPress={() => navigation.navigate("Bread")}
      />
      <GridItem >

      </GridItem>
    </View>
    */
  );
};

export default connect()(CategoriesScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF724C",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Kdam_Thmor_Pro",
  },
});
