import { NavigationProp } from "@react-navigation/native";
import { Text } from 'react-native';
import { View } from "@gluestack-ui/themed";
import YoutubePlayer from "react-native-youtube-iframe";
import WebView from "react-native-webview";
import { ButtonMenu } from "../../components/ButtonPlay";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";


export const LearnHowToPlay = ({ navigation }: { navigation: NavigationProp<any> }) =>{

    return(

        <View 
            display="flex"
            width="100%"
            height="100%"
            padding={20}
            flexDirection="row"
            justifyContent="center"
            
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
            
            
        </View>
        
           
        
    )
    
}