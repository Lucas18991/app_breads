import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ShopNavigator } from "./ShopNavigator";
import { CartNavigator } from "./CartNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import IonIcons from "@expo/vector-icons/AntDesign";
const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <BottonTabs.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.TabBar,
      }}
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focus }) => (
            <View style={styles.item}>
              <IonIcons name="home" size={20} color="black" />
              <Text>Tienda</Text>
            </View>
          ),
        }}
      />

      <BottomTabs.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focus }) => (
            <View style={styles.item}>
              <IonIcons name="cart" size={20} color="black" />

              <Text>Carrito</Text>
            </View>
          ),
        }}
      />

      <BottomTabs.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focus }) => (
            <View style={styles.item}>
              <IonIcons name="list" size={20} color="black" />

              <Text>Ordenes</Text>
            </View>
          ),
        }}
      />
    </BottonTabs.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#7f6df0",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 5,
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  item: {
    flex: 1,
    justifyContent: "center",
  },
});
