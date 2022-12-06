import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
const BreadDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bread Details</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => navigation.navigate("Categories")}
      />
    </View>
  );
};

export default BreadDetailsScreen;

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
