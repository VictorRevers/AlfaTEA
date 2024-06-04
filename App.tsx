import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./src/routes/routes";
import { StatusBar } from "expo-status-bar";
import { createContext, useState } from "react";

const Stack = createNativeStackNavigator();
export const Context = createContext<any>("");
export default function App() {
  const [selectedImage, setSelectedImage] = useState("");
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Context.Provider value={[selectedImage, setSelectedImage]}>
        <GluestackUIProvider config={config}>
          <Routes />
        </GluestackUIProvider>
      </Context.Provider>
    </NavigationContainer>
  );
}
