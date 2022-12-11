import { FlatList } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import BreadItem from "../components/BreadItem";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  filteredBread,
  selectBread,
  selectedBread,
} from "../store/actions/bread.action";

const CategoryBreadScreen = ({ navigation, route }) => {
  const category = useSelector((state) => state.categories.selected);
  const categoryBreads = useSelector((state) => state.breads.filteredBread);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filteredBread(category.id));
  }, []);

  /*const breads = BREADS.filter(
    (bread) => bread.category === route.params.category
  );*/
  const renderBreadBread = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelectedCategory} />
  );
  const handleSelectedCategory = (item) => {
    dispatch(selectedBread(item.id));
    navigation.navigate("Details", {
      name: item.name,
    });
  };

  return (
    <FlatList
      data={categoryBreads}
      keyExtractor={(item) => item.id}
      renderItem={renderBreadBread}
    />
  );
};

export default connect()(CategoryBreadScreen);
