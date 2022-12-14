import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { getOrders } from "../store/actions/order.action";
import OrderItem from "../components/OrderItem";
const OrdersScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const handleDeleteItem = () => {
    console.log("eliminar");
  };

  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={handleDeleteItem} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};
export default connect()(OrdersScreen);

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
});
