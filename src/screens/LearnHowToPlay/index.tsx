import { NavigationProp } from "@react-navigation/native";
import { Text } from 'react-native';
import { View } from "@gluestack-ui/themed";
import YoutubePlayer from "react-native-youtube-iframe";

export const LearnHowToPlay = ({ navigation }: { navigation: NavigationProp<any> }) =>{

    return(

        <View 
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="100%"
        w="100%"
        flexDirection="column"
        > 
            <Text> APRENDA A JOGAR!!!</Text>

            <YoutubePlayer 
            height={300}
            play ={true}
            videoId={'0GOUF8vNqzE'}
            />
            
        </View>
    )
    
}