import React from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { COLORS, Colors } from "../constants";
import { useDispatch } from "react-redux";
import { addPlace } from "../store/places.actions";
import { useState } from "react";
import { NavigationContainerRefContext } from "@react-navigation/native";
import ImageSelector from "../components/ImageSelector";

const NewPlaceScreen = ({ mavigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const handleTitleChange = (text) => setTitle(text);

  const handleSave = () => {
    dispatch(addPlace(title));
    NavigationContainerRefContext.navigate("Direcciones");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Titulo</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleTitleChange}
          value={title}
        />
        <ImageSelector onImage={(Image) => console.log(image)} />
        <Button
          title="grabar Direccion"
          color={COLORS.MAROON}
          onPress={handleSave}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    margin: 16,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});

export default NewPlaceScreen;
