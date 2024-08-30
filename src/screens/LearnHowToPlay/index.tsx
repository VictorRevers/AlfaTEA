import { NavigationProp } from "@react-navigation/native";
import { Text } from 'react-native';
import { ImageBackground, View } from "@gluestack-ui/themed";
import YoutubePlayer from "react-native-youtube-iframe";
import WebView from "react-native-webview";
import { ButtonMenu } from "../../components/ButtonMenu";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ImagesController from "../../controllers/ImagesController";
import Video from "react-native-video";


export const LearnHowToPlay = ({ navigation }: { navigation: NavigationProp<any> }) =>{

    const imagesList = ImagesController.GetImages("Hud");
    const video = ImagesController.GetImages("Video");

    return(

        <View 
            width="100%"
            height="100%"
        >
            <ImageBackground
                display="flex"
                w="100%"
                h="100%"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                source={imagesList[6]}
            >
                <View
                    w="50%"
                    h="100%"
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="flex-end"
                >
                    <MaterialIcons
                        name="arrow-back"
                        size={32}
                        color="black"
                        onPress={() => {
                            navigation.navigate("Home");
                        }}
                    />
                </View>
                <View
                    w="50%"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-end"
                >
                    <Video
                        source={{ uri: video[0]}} // URL do vídeo ou caminho local
                        controls={true} // Exibe controles de reprodução
                        resizeMode="contain" // Ajusta o vídeo para caber na tela
                    />

                </View>
            
            </ImageBackground>
        </View>
        
           
        
    )
    
}