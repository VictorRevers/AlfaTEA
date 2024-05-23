//import { Button } from 'gluestack-ui';
import {View, Pressable, Text} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

type buttonProps = {
  type: string;
  onPress: () => void;
  image?: any;
}

export function ButtonMenu(props: buttonProps){
  if(props.type == "play"){
    return(
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} p="$5" bg="red" onPress={props.onPress}>
          <Text color="white">Jogar</Text>
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
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    width: 200,
    height: 200,
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
  }
});