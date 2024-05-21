//import { Button } from 'gluestack-ui';
import {View, Pressable, Text} from "@gluestack-ui/themed";
import { useState } from "react";

type buttonProps = {
  type: string;
  onPress: () => void;
  image?: any;
}

const [bg, setBg] = useState("");

export function ButtonMenu(props: buttonProps){
  if(props.type == "play"){
    return(
      <View>
        <Pressable p="$5" bg={bg} onPress={() => setBg("blue")}>
          <Text color="white">Play</Text>
        </Pressable>
      </View>
    )
  }else if(props.type == "credit"){
    return(
      <View>
        <Pressable p="$5" bg={bg} onPress={() => setBg("blue")}>
          <Text color="white">Credit</Text>
        </Pressable>
      </View>
    )
  } else if(props.type == "aprenda"){
    return(
      <View>
        <Pressable p="$5" bg={bg} onPress={() => setBg("blue")}>
          <Text color="white">Aprenda</Text>
        </Pressable>
      </View>
    )
  } else if(props.type == "sobre"){
    return(
      <View>
        <Pressable p="$5" bg={bg} onPress={() => setBg("blue")}>
          <Text color="white">Sobre</Text>
        </Pressable>
      </View>
    )
  }
}
