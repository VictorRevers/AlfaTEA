import { ImageBackground, View } from "@gluestack-ui/themed";
import ImagesController from "../../controllers/ImagesController";
import { useEffect } from "react";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

export function Intro({
    navigation,
  }: {
    navigation: NavigationProp<any>;
  }){
    const imagesList = ImagesController.GetImages("Hud");

    function IntroAnimation(){
        setTimeout(() => navigation.navigate("Home"), 2000)
    }

    useEffect(() => {
        IntroAnimation();
    }, [])

    return(
        <View>
            <ImageBackground
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="100%"
                w="100%"
                flexDirection="column"
                source={imagesList[7]}
            >

            </ImageBackground>
        </View>
    );
}