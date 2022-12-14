import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigation from "./AuthNavigation";
import BottomTabNavigator from "./BottomTabNavigator";

export default () => {
  const [user, setUser] = useState(null);
  return (
    <NavigationContainer>
      {user ? <BottomTabNavigator /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
