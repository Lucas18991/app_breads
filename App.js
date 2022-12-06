import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import ShopNavigator from "./src/navigation/ShopNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    Kdam_Thmor_Pro: require(".srcassets\fontsKdam_Thmor_ProKdamThmorPro-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <ShopNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
