import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const GridItem = ({ item, onSelected }) => {
  return (
    <View style={styles.GridItem}>
      <TouchableOpacity
        style={{ ...styles.container, backgroundColor: item.color }}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  GridItem: {
    flex: 1,
    borderRadius: 6,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 6,
    shadowColor: 15,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: 150,
  },
  title: {
    fontFamily: "Kdam_Thmor_Pro",
  },
});
