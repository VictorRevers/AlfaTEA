//import { Button } from 'gluestack-ui';
import {View, Pressable, Image, Text, ImageBackground} from "@gluestack-ui/themed";
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
        <Pressable style={styles.btn} onPress={props.onPress}>
          <Image
            alt="Image1"
            style={styles.imageBtn}
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
        <Pressable style={styles.btn} onPress={props.onPress}>
          <Image
            alt="Image1"
            style={styles.imageBtn}
            source={
              imagesList[1]
            }
          />
        </Pressable>
      </View>
    )
  } else if(props.type == "aprenda"){
    return(
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={props.onPress}>
          <Image
            alt="Image1"
            style={styles.imageBtn}
            source={
              imagesList[5]
            }
          />
        </Pressable>
      </View>
    )
  } else if(props.type == "sobre"){
    return(
      <View style={styles.btnContainer}>
          <Pressable style={styles.btn} onPress={props.onPress}>
            <Image
              alt="Image1"
              style={styles.imageBtn}
              source={
                imagesList[4]
              }
            />
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
    height: 190,
  },
  imageBtn: {
    width: "100%",
    height: "100%",
  },
  btn: {
    width: 176,
    height: "100%",
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