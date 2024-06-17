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


import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { Context, PointsContext, RightImagesContext } from "../../../App";
import { useContext, useState, useEffect, useRef } from "react";
import ModalImage from "../../components/ModalImage";
import { StatusBar } from "expo-status-bar";
import ImageList from "../../components/ImageList";

export const FiguresOptions = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const viewToSnapShotRef: any = useRef();
  const [snapshotImage, setSnapShotImage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedImage, setPickedImage] = useState(null);

  const targetPixelCount = 1080; // If you want full HD pictures
  const pixelRatio = PixelRatio.get(); // The pixel ratio of the device
  // pixels * pixelRatio = targetPixelCount, so pixels = targetPixelCount / pixelRatio
  const pixels = targetPixelCount / pixelRatio;


  const [selectedImage, setSelectedImage] = useContext(Context);
  const [points, setPoints] = useContext(PointsContext);
  const [rightImages, setRightImages] = useContext(RightImagesContext);

  const printRightImages = () => {
    rightImages.forEach((image: any) => {
      console.log(image[0]);
      console.log(rightImages.length);
    });
  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const drag = Gesture.Pan()
    .onChange((event) => {
      translateX.value += event.changeX;
      translateY.value += event.changeY;
    });

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

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });
  

  
  /*const [points, setPoints] = useState(0);

  const addPoints = () => {
    let i: number = points + 1;
    setPoints(i);
  };*/

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
              setSelectedImage("Cenarios");
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
      
      <GestureDetector gesture={drag}>
        <Animated.View
          style={[containerStyle, { 
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                    marginTop: 4,
                                    width: "90%",
                                    height: "55%",
                                    borderWidth: 1,
                                    padding: 2,
                                    borderColor: "black",
                                  }]}
        >

        </Animated.View>
      </GestureDetector>

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
            onPress={() => {printRightImages()}}
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
      <View>
        <ModalImage isVisible={isModalVisible} onClose={() => {onModalClose()}}>
          <ImageList onSelect={setPickedImage} onCloseModal={onModalClose} />
        </ModalImage>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};
