import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { addItem } from "../store/actions/cart.action";

const BreadDetailsScreen = ({ navigation }) => {
  const bread = useSelector((state) => state.bread.selected);
  const dispatch = useDispatch();
  const handleAddItemCart = () => {
    dispatch(addItem(bread));
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.title}>{bread.name}</Text>
        <Text style={styles.description}>{bread.description}</Text>
        <Text style={styles.price}>{bread.price}</Text>
        <View style={styles.Button}>
          <Button
            title="Agregar al carrito"
            onPress={handleAddItemCart}
          ></Button>
        </View>
      </View>
    </View>
  );
};

export default BreadDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  screen: {
    flex: 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
  },
  title: {
    fontFamily: "Kdam_Thmor_Pro",
    fontSize: 18,
  },
  Button: {
    marginTop: 15,
  },
});
