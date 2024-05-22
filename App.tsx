import { config } from '@gluestack-ui/config';
import { Box, GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { Home } from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Menu } from './src/screens/Menu';
import { Credit } from './src/screens/Credit';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Menu' component={Menu}/>
          <Stack.Screen name='Credit' component={Credit}/>
        </Stack.Navigator>
      </GluestackUIProvider>
    </NavigationContainer>
    
  );
}



