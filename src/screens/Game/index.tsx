import { NavigationProp } from "@react-navigation/native";

import { Context } from "../../../App";
import {
  View,
  Text,
  Button,
  Box,
  Image,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import { useContext, useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import ImagesController from "../../controllers/ImagesController";
import * as Speech from "expo-speech";
import { Pressable } from "react-native";

export const Game = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [selectedImage, setSelectedImage] = useContext(Context);
  const [word, setWord] = useState<string>("");
  const [image, setImage] = useState();

  const imagesList = ImagesController.GetImages(selectedImage);
  const [i, setI] = useState(0);
  console.log("PALAVRA: "+imagesList[i][0]);
  console.log(imagesList.length);
  

  const changeImage = () => {
    if(i < imagesList.length-1){
      setI(i+1);
    }else{
      setI(0);
    }   
    console.log(i);
  };

  const handleButtonClick = (letter: string) => {
    setWord((prevValue) =>
      prevValue == "" ? prevValue + letter.toUpperCase() : prevValue + letter
    );
    console.log(selectedImage);
  };
  const ClearWord = () => {
    setWord("");
  };

  const Tts = () => {
    Speech.speak(word);
  };

  /*useEffect(()=>{
    getImages(selectedImage);
  });*/

  return (
    <View
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="100%"
      w="100%"
      flexDirection="column"
    >
      <View
        borderColor="black"
        borderWidth="$1"
        w="95%"
        h="85%"
        display="flex"
        alignItems="center"
        flexDirection="row"
      >
        <View w="40%" h="100%">
          <View
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
          >
            <View
              display="flex"
              alignItems="center"
              justifyContent="center"
              w="55%"
            >
              <Image
                borderColor="black"
                borderWidth="$2"
                mt="$4"
                size="xl"
                alt="Image1"
                source={
                  /*{
                  uri: "http://placekitten.com/300/300",
                }*/imagesList[i][1]}
              />
            </View>
            <View display="flex" alignItems="center" justifyContent="center">
              <Box borderColor="black" borderWidth="$2">
                <AntDesign name="sound" size={40} color="black" />
              </Box>
            </View>
          </View>
          <View
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            gap="$4"
            mt="$2"
          >
            <Input
              variant="outline"
              size="md"
              w="$40"
              isReadOnly={true}
              borderColor="black"
              borderWidth="$2"
            >
              <InputField
                placeholder=""
                value={word}
                fontWeight="$bold"
                fontSize="$xl"
              />
            </Input>
            <Box borderColor="black" borderWidth="$2">
              <AntDesign
                name="sound"
                size={40}
                color="black"
                onPress={() => {
                  Tts();
                }}
              />
            </Box>
          </View>
          <View
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <MaterialIcons
              name="clear"
              size={48}
              color="red"
              onPress={() => {
                ClearWord();
                changeImage();
              }}
            />
          </View>
        </View>
        <View
          w="55%"
          h="80%"
          display="flex"
          flexDirection="column"
          borderColor="black"
          borderWidth="$2"
          pt="$4"
          mb="$8"
        >
          <View
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            gap="$8"
          >
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("a")}
              >
                A
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("b")}
              >
                B
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("c")}
              >
                C
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("d")}
              >
                D
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("e")}
              >
                E
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("f")}
              >
                F
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("g")}
              >
                G
              </Text>
            </Box>
          </View>
          <View
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            gap="$8"
          >
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("h")}
              >
                H
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("i")}
              >
                {" "}
                I
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("j")}
              >
                J
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("k")}
              >
                K
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("l")}
              >
                L
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("m")}
              >
                M
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("n")}
              >
                N
              </Text>
            </Box>
          </View>
          <View
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            gap="$8"
          >
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("o")}
              >
                O
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("p")}
              >
                P
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("q")}
              >
                Q
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("r")}
              >
                R
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("s")}
              >
                S
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("t")}
              >
                T
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("u")}
              >
                U
              </Text>
            </Box>
          </View>
          <View
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            gap="$8"
          >
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("v")}
              >
                V
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("w")}
              >
                W
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("x")}
              >
                X
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("y")}
              >
                Y
              </Text>
            </Box>
            <Box w="$8">
              <Text
                fontSize="$4xl"
                fontWeight="$bold"
                onPress={() => handleButtonClick("z")}
              >
                Z
              </Text>
            </Box>
          </View>
        </View>
      </View>

      <Button
        mt="$1"
        alignSelf="flex-start"
        ml={"$5"}
        onPress={() => {
          navigation.navigate("FiguresOptions");
        }}
      >
        <Text>
          <Text color="white">{selectedImage}</Text>
        </Text>
      </Button>
    </View>
  );
};
