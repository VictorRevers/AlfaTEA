import {
  View,
  Text,
  Image,
  Link,
  Pressable,
  Button,
} from "@gluestack-ui/themed";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { NavigationProp } from "@react-navigation/native";
import { captureRef } from "react-native-view-shot";
import { PixelRatio } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrintPDF from "../../controllers/PrintPDF";
import ImagesController from "../../controllers/ImagesController";

import { Context } from "../../../App";
import { useContext, useState, useEffect, useRef } from "react";

export const FiguresOptions = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const viewToSnapShotRef: any = useRef();
  const [snapshotImage, setSnapShotImage] = useState("");
  const [images, setImages] = useState(Array<any>);

  const targetPixelCount = 1080; // If you want full HD pictures
  const pixelRatio = PixelRatio.get(); // The pixel ratio of the device
  // pixels * pixelRatio = targetPixelCount, so pixels = targetPixelCount / pixelRatio
  const pixels = targetPixelCount / pixelRatio;

  //take printscreen and turn into PDF
  const snapshot = async () => {
    const result = await captureRef(viewToSnapShotRef, {
      result: "data-uri",
      height: pixels,
      width: pixels,
      quality: 1,
      format: "png",
    });
    console.log(result);
    const html = await PrintPDF.setHTML(result);
    PrintPDF.printToFile(html);
  };

  const getImages = (type: string) => {
    let imgs = ImagesController.GetImages(type);
    setImages(imgs);
    console.log("CLICOU!!!!!!");

    //implement change view...
  };

  const [selectedImage, setSelectedImage] = useContext(Context);
  const [points, setPoints] = useState(0);

  const addPoints = () => {
    let i: number = points + 1;
    setPoints(i);
  };

  return (
    <View
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <View
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        borderColor="$black"
        mt={6}
        borderWidth={"$1"}
        w={"90%"}
        h={"30%"}
        gap={6}
        p={3}
      >
        <View flexDirection="column" alignItems="center">
          <Pressable
            onPress={() => {
              getImages("Cenarios");
              setSelectedImage("Cenários");
              navigation.navigate("Game");
            }}
            display="flex"
            alignItems="center"
          >
            <Image
              size="md"
              alt="Image1"
              source={{
                uri: "http://placekitten.com/300/300",
              }}
            />
            <Text fontSize={"$lg"} fontWeight={"$bold"}>
              Cenários
            </Text>
          </Pressable>
        </View>

        <View flexDirection="column" alignItems="center">
          <Pressable
            onPress={() => {
              getImages("Personagens");
              setSelectedImage("Personagens");
              navigation.navigate("Game");
            }}
            display="flex"
            alignItems="center"
          >
            <Image
              size="md"
              alt="Image1"
              source={{
                uri: "http://placekitten.com/300/300",
              }}
            />
            <Text fontSize={"$lg"} fontWeight={"$bold"}>
              Personagens
            </Text>
          </Pressable>
        </View>
        <View flexDirection="column" alignItems="center">
          <Pressable
            onPress={() => {
              getImages("Animais");
              setSelectedImage("Animais");
              navigation.navigate("Game");
            }}
            display="flex"
            alignItems="center"
          >
            <Image
              size="md"
              alt="Image1"
              source={{
                uri: "http://placekitten.com/300/300",
              }}
            />
            <Text fontSize={"$lg"} fontWeight={"$bold"}>
              Animais
            </Text>
          </Pressable>
        </View>
        <View flexDirection="column" alignItems="center">
          <Pressable
            onPress={() => {
              getImages("Objetos");
              setSelectedImage("Objetos");
              navigation.navigate("Game");
            }}
            display="flex"
            alignItems="center"
          >
            <Image
              size="md"
              alt="Image1"
              source={{
                uri: "http://placekitten.com/300/300",
              }}
            />
            <Text fontSize={"$lg"} fontWeight={"$bold"}>
              Objetos
            </Text>
          </Pressable>
        </View>
        <View flexDirection="column" alignItems="center">
          <Pressable
            onPress={() => {
              getImages("Brinquedos");
              setSelectedImage("Brinquedos");
              navigation.navigate("Game");
            }}
            display="flex"
            alignItems="center"
          >
            <Image
              size="md"
              alt="Image1"
              source={{
                uri: "http://placekitten.com/300/300",
              }}
            />
            <Text fontSize={"$lg"} fontWeight={"$bold"}>
              Brinquedos
            </Text>
          </Pressable>
        </View>
      </View>
      <SafeAreaView></SafeAreaView>
      <View
        ref={viewToSnapShotRef}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        borderColor="$black"
        mt={4}
        borderWidth={"$1"}
        w={"90%"}
        h={"55%"}
        p={2}
      >
        <Text>Draws</Text>
      </View>
      <View
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        mt={2}
        w={"100%"}
        h={"12%"}
      >
        <MaterialIcons
          name="arrow-back"
          size={32}
          color="black"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <View display="flex" alignItems="center" justifyContent="center">
          <Pressable
            display="flex"
            alignItems="center"
            justifyContent="center"
            onPress={() => {
              addPoints();
            }}
          >
            <Image
              size="md"
              alt="Image1"
              source={require("../../assets/Images/Teste/star.png")}
              width={220}
              display="flex"
              alignItems="center"
              justifyContent="center"
            />
            <Text position="absolute" fontWeight="bold">
              {points}
            </Text>
          </Pressable>
        </View>
        <Button onPress={snapshot} bg="#f4f4f4">
          <MaterialCommunityIcons name="printer" size={32} color="black" />
        </Button>
      </View>
    </View>
  );
};
