import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { CART } from "../data/cart";
import CartItem from "../components/CartItem";
const CartScreen = () => {
  const items = CART;
  const total = 120;
  const handleConfirmCart = () => {
    console.log("Confirmar Carrito");
  };
  const handleDeleteItem = () => {
    console.log("Eliminar Carrito");
  };

  const renderItem = ({ item }) => {
    <CartItem item={item} onDelete={handleDeleteItem} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm}>
          <Text>Confirmar</Text>

          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  confirm: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  confirm: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    padding: 8,
  },
});
