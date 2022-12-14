import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/colors";
import OrdersScreen from "../screens/ordersScreen";

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="orders"
      screenOptions={{
        headerStyle: { backgroundcColor: COLORS.primary },
        headerTintColor: COLORS.secondary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          title: "Ordenes",
        }}
      />
    </Stack.Navigator>
  );
};

export default OrderNavigator;
