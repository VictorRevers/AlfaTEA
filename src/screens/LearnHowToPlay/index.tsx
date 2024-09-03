import { NavigationProp } from "@react-navigation/native";
import { ImageBackground, View } from "@gluestack-ui/themed";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ImagesController from "../../controllers/ImagesController";
import { Video, ResizeMode } from 'expo-av';


export const LearnHowToPlay = ({ navigation }: { navigation: NavigationProp<any> }) =>{

    const imagesList = ImagesController.GetImages("Hud");
    const video = require('../../assets/tutorial-video.mp4');

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
                    justifyContent="center"
                    alignItems="flex-end"
                >
                    <Video
                        source={ video }
                        resizeMode={ResizeMode.CONTAIN}
                        style={{ width: 600, height: 300 }}
                        useNativeControls
                    />
                </View>
            
            </ImageBackground>
        </View>
        
           
        
    )
    
}