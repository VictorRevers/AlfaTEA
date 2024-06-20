import { NavigationProp } from "@react-navigation/native";
import { Text } from 'react-native';
import { View } from "@gluestack-ui/themed";
import YoutubePlayer from "react-native-youtube-iframe";
import WebView from "react-native-webview";


export const LearnHowToPlay = ({ navigation }: { navigation: NavigationProp<any> }) =>{

    return(

        

            <YoutubePlayer height={500} width={200} videoId="TY88BtRtG3I" />
        
    )
    
}