import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const BreadItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.BreadItem}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.details}>{item.price}</Text>
          <Text style={styles.details}>{item.weight}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BreadItem;

const styles = StyleSheet.create({
  BreadItem: {
    borderRadius: 3,
    margin: 10,
    padding: 22,
    backgroundColor: "#ccc",
  },
  details: {
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    fontFamily: "Kdam_Thmor_Pro",
  },
});
