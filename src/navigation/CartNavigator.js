import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoryBreadScreen } from "../screens/CategoryBreadScreen";
import { BreadDetailsScreen } from "../screens/BreadDetailsScreen";
import { CategoriesScreen } from "../screens/CategoriesScreen";
import { COLORS } from "../constants/colors";
const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundcColor: COLORS.primary },
        headerTintColor: COLORS.secondary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Carrito",
        }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
