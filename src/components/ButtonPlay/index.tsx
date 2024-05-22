//import { Button } from 'gluestack-ui';
import {View, Pressable, Text} from "@gluestack-ui/themed";

type buttonProps = {
  type: string;
  onPress: () => void;
  image?: any;
}

export function ButtonMenu(props: buttonProps){
  if(props.type == "play"){
    return(
      <View>
        <Pressable p="$5" bg="red" onPress={props.onPress}>
          <Text color="white">Play</Text>
        </Pressable>
      </View>
    )
  }else if(props.type == "credit"){
    return(
      <View>
        <Pressable p="$5" bg="blue" onPress={props.onPress}>
          <Text color="white">Credit</Text>
        </Pressable>
      </View>
    )
  } else if(props.type == "aprenda"){
    return(
      <View>
        <Pressable p="$5" bg="green" onPress={props.onPress}>
          <Text color="white">Aprenda</Text>
        </Pressable>
      </View>
    )
  } else if(props.type == "sobre"){
    return(
      <View>
        <Pressable p="$5" bg="purple" onPress={props.onPress}>
          <Text color="white">Sobre</Text>
        </Pressable>
      </View>
    )
  }
}
