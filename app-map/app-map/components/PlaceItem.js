import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

const PlaceItem = () => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.PlaceItem}>
      <Image style={styles.image} source={{ uri: image }} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  PlaceItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.PEACH_PUFF,
  },
  info: {
    marginLeft: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 6,
    fontSize: 18,
    color: COLORS.BLUSH,
  },
  address: {
    fontSize: 16,
    color: "#777",
  },
});
