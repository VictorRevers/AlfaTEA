import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Menu } from "../screens/Menu";
import { Credit } from "../screens/Credit";
import { Sobre } from "../screens/Sobre";
import { FiguresOptions } from "../screens/FiguresOptions";
import { Game } from "../screens/Game";
import { LearnHowToPlay } from "../screens/LearnHowToPlay";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Credit" component={Credit} />
      <Stack.Screen name="Sobre" component={Sobre} />
      <Stack.Screen name="FiguresOptions" component={FiguresOptions} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="LearnHowToPlay" component={LearnHowToPlay} />
    </Stack.Navigator>
  );
};
