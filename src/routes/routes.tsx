import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";

const Stack = createNativeStackNavigator();

export const Routes = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: false }}
        >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};  