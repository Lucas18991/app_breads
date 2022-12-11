import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import ShopNavigator from "./src/navigation/ShopNavigator";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    Kdam_Thmor_Pro: require(".srcassets\fontsKdam_Thmor_ProKdamThmorPro-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  /* return <ShopNavigator />;
   */
  return (
    <Provider store={store}>
      <BottomTabNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
