//import { Button } from 'gluestack-ui';
import {View, Pressable, Image, Text} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import ImagesController from "../../controllers/ImagesController";

type buttonProps = {
  type: string;
  onPress: () => void;
  image?: any;
}

export function ButtonMenu(props: buttonProps){
  const imagesList: any = ImagesController.GetImages("Hud");

  if(props.type == "play"){
    return(
      <View style={styles.btnContainer}>
        <Pressable onPress={props.onPress}>
          <Image
            mt="$4"
            size="2xl"
            alt="Image1"
            
            source={
              imagesList[2]
            }
          />
        </Pressable>
      </View>
    )
  }else if(props.type == "credit"){
    return(
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} p="$5" bg="blue" onPress={props.onPress}>
          <Text color="white">Credito</Text>
        </Pressable>
      </View>
    )
  } else if(props.type == "aprenda"){
    return(
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} p="$5" bg="green" onPress={props.onPress}>
          <Text color="white">Aprenda</Text>
        </Pressable>
      </View>
    )
  } else if(props.type == "sobre"){
    return(
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} p="$5" bg="purple" onPress={props.onPress}>
          <Text color="white">Sobre</Text>
        </Pressable>
      </View>
    )
  } else if(props.type == "voltar"){
    return(
      <View style={styles.btnContainer}>
          <Pressable style={styles.btnVoltar} bg="red" onPress={props.onPress}>
            <Text color="white">Voltar</Text>
          </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 110,
    height: 110,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnVoltar: {
    width: 70,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
});