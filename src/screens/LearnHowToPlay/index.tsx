import { NavigationProp } from "@react-navigation/native";
import { Text } from 'react-native';
import { ImageBackground, View } from "@gluestack-ui/themed";
import YoutubePlayer from "react-native-youtube-iframe";
import WebView from "react-native-webview";
import { ButtonMenu } from "../../components/ButtonMenu";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ImagesController from "../../controllers/ImagesController";


export const LearnHowToPlay = ({ navigation }: { navigation: NavigationProp<any> }) =>{

    const imagesList = ImagesController.GetImages("Hud");

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
                source={imagesList[0]}
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
                    <YoutubePlayer height={350} width={500} videoId="TY88BtRtG3I" />
                </View>
            
            </ImageBackground>
        </View>
        
           
        
    )
    
}