import AuthScreen from "../screens/AuthScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { COLORS } from "../constants/colors";
const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundcColor: COLORS.primary },
        headerTintColor: COLORS.secondary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Login" component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
