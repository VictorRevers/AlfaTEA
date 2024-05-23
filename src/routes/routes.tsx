import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Menu } from "../screens/Menu";
import { Credit } from "../screens/Credit";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Credit" component={Credit} />
    </Stack.Navigator>
  );
};
