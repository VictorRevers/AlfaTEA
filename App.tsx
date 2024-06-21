import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./src/routes/routes";
import { StatusBar } from "expo-status-bar";
import { createContext, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();
export const Context = createContext<any>("");
export const PointsContext = createContext<any>(0);
export const RightImagesContext = createContext<any>([]);
export default function App() {
  const [selectedImage, setSelectedImage] = useState("");
  const [points, setPoints] = useState(0);
  const [rightImages, setRightImages] = useState([]);
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <GestureHandlerRootView>
        <Context.Provider value={[selectedImage, setSelectedImage]}>
          <RightImagesContext.Provider value={[rightImages, setRightImages]}>
            <PointsContext.Provider value={[points, setPoints]}>
              <GluestackUIProvider config={config}>
                <Routes />
              </GluestackUIProvider>
            </PointsContext.Provider>
          </RightImagesContext.Provider>
        </Context.Provider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
