import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./src/routes/routes";
import { StatusBar } from "expo-status-bar";
import { createContext, useState } from "react";

const Stack = createNativeStackNavigator();
export const Context = createContext<any>("");
export const PointsContext = createContext<any>(0);
export default function App() {
  const [selectedImage, setSelectedImage] = useState("");
  const [points, setPoints] = useState(0);
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Context.Provider value={[selectedImage, setSelectedImage]}>
        <PointsContext.Provider value={[points, setPoints]}>
          <GluestackUIProvider config={config}>
            <Routes />
          </GluestackUIProvider>
        </PointsContext.Provider>
      </Context.Provider>
    </NavigationContainer>
  );
}
