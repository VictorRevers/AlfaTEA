import {
  View,
  Text,
  Image,
  Link,
  Pressable,
  Button,
  ImageBackground,
} from "@gluestack-ui/themed";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { NavigationProp } from "@react-navigation/native";
import { captureRef } from "react-native-view-shot";
import { PixelRatio } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrintPDF from "../../controllers/PrintPDF";

import { Context, PointsContext, RightImagesContext } from "../../../App";
import { useContext, useState, useEffect, useRef } from "react";
import ModalImage from "../../components/ModalImage";
import { StatusBar } from "expo-status-bar";
import ImageList from "../../components/ImageList";
import ImageSticker from "../../components/ImageSticker";
import ImagesController from "../../controllers/ImagesController";

interface imageStickerProps {
  id: number;
}

export const FiguresOptions = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const viewToSnapShotRef: any = useRef();
  const [snapshotImage, setSnapShotImage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedImage, setPickedImage] = useState<any>([]);
  const [imageComponents, setImageComponents] = useState<imageStickerProps[]>([]);

  let optionsWidth: number = 118;

  const targetPixelCount = 1080; // If you want full HD pictures
  const pixelRatio = PixelRatio.get(); // The pixel ratio of the device
  // pixels * pixelRatio = targetPixelCount, so pixels = targetPixelCount / pixelRatio
  const pixels = targetPixelCount / pixelRatio;


  const [selectedImage, setSelectedImage] = useContext(Context);
  const [points, setPoints] = useContext(PointsContext);
  const [rightImages, setRightImages] = useContext(RightImagesContext);
  const imagesList = ImagesController.GetImages("Hud");

  const onAddSticker = () => {
    console.log(pickedImage.length)
    setIsModalVisible(true);
  };

  const addSticker = (item: any) => {
    let imageAux: any [] = pickedImage;
    let imageExist: boolean = false;

    if(pickedImage.length == 0){
      imageAux.push(item);
      setPickedImage(imageAux);
      setImageComponents([...imageComponents, {id: imageComponents.length + 1}]);
    } else{
      for(let i = 0; i < pickedImage.length; i++){
        if(item == pickedImage[i]){
          imageExist = true;
        }
      }

      if(!imageExist){
        imageAux.push(item);
        setPickedImage(imageAux);
        setImageComponents([...imageComponents, {id: imageComponents.length + 1}]);
      }
    }
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

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
    const html = await PrintPDF.setHTML(result,rightImages);
    PrintPDF.printToFile(html);
  };

  return (
    <View
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <ImageBackground
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="100%"
        w="100%"
        flexDirection="column"
        source={imagesList[0]}
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
          <View flexDirection="column" alignItems="center" w={optionsWidth}>
            <Pressable
              onPress={() => {
                setSelectedImage("Cenarios");
                navigation.navigate("Game");
              }}
              display="flex"
              alignItems="center"
            >
              <Image
                size="md"
                alt="Image1"
                source={require("../../assets/Images/Figuras/imagemLocais.png")}
              />
              <Text fontSize={"$lg"} fontWeight={"$bold"}>
                Cenários
              </Text>
            </Pressable>
          </View>
          <View flexDirection="column" alignItems="center" w={optionsWidth}>
            <Pressable
              onPress={() => {
                setSelectedImage("Personagens");
                navigation.navigate("Game");
              }}
              display="flex"
              alignItems="center"
            >
              <Image
                size="md"
                alt="Image1"
                source={require("../../assets/Images/Figuras/imagemPersonagens.png")}
              />
              <Text fontSize={"$lg"} fontWeight={"$bold"}>
                Personagens
              </Text>
            </Pressable>
          </View>
          <View flexDirection="column" alignItems="center" w={optionsWidth}>
            <Pressable
              onPress={() => {
                setSelectedImage("Animais");
                navigation.navigate("Game");
              }}
              display="flex"
              alignItems="center"
            >
              <Image
                size="md"
                alt="Image1"
                source={require("../../assets/Images/Figuras/imagemAnimais.png")}
              />
              <Text fontSize={"$lg"} fontWeight={"$bold"}>
                Animais
              </Text>
            </Pressable>
          </View>
          <View flexDirection="column" alignItems="center" w={optionsWidth}>
            <Pressable
              onPress={() => {
                setSelectedImage("Objetos");
                navigation.navigate("Game");
              }}
              display="flex"
              alignItems="center"
            >
              <Image
                size="md"
                alt="Image1"
                source={require("../../assets/Images/Figuras/imagemObjetos.png")}
              />
              <Text fontSize={"$lg"} fontWeight={"$bold"}>
                Objetos
              </Text>
            </Pressable>
          </View>
          <View flexDirection="column" alignItems="center" w={optionsWidth}>
            <Pressable
              onPress={() => {
                setSelectedImage("Brinquedos");
                navigation.navigate("Game");
              }}
              display="flex"
              alignItems="center"
            >
              <Image
                size="md"
                alt="Image1"
                source={require("../../assets/Images/Figuras/imagemBrinquedos.png")}
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
          borderColor="$black"
          mt={4}
          borderWidth={"$1"}
          w={"90%"}
          h={"55%"}
          p={2}
        >
          {imageComponents.map(image => <ImageSticker id={image.id} key={image.id} imageSize={60} stickerSource={pickedImage[image.id - 1]} />
        )}
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
              onPress={() => {onAddSticker()}}
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
          <Button onPress={snapshot} bg="transparent">
            <MaterialCommunityIcons name="printer" size={32} color="black" />
          </Button>
        </View>
        <View>
          <ModalImage isVisible={isModalVisible} onClose={() => {onModalClose()}}>
            <ImageList onSelect={addSticker} images={rightImages} onCloseModal={onModalClose} />
          </ModalImage>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </View>
  );
};
