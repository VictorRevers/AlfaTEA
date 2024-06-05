import { View, Text, Image, Link, Pressable } from "@gluestack-ui/themed";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { NavigationProp } from "@react-navigation/native";
import { Context } from "../../../App";
import { useContext, useState } from "react";


export const FiguresOptions = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const [selectedImage, setSelectedImage] = useContext(Context);
  const [points, setPoints] = useState(0);

  const addPoints = ()=>{
    let i: number = points + 1;
    setPoints(i)
  }

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
        w={"80%"}
        gap={6}
        p={3}
      >
        <View flexDirection="column" alignItems="center">
          <Link
            onPress={() => {
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
          </Link>
        </View>

        <View flexDirection="column" alignItems="center">
          <Link
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
          </Link>
        </View>
        <View flexDirection="column" alignItems="center">
          <Link
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
          </Link>
        </View>
        <View flexDirection="column" alignItems="center">
          <Link
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
          </Link>
        </View>
        <View flexDirection="column" alignItems="center">
          <Link
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
          </Link>
        </View>
      </View>
      <View
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        borderColor="$black"
        mt={4}
        borderWidth={"$1"}
        w={"80%"}
        h={"$48"}
        gap={6}
        p={3}
      >
        <Text>Div2</Text>
      </View>
      <View
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        mt={8}
        w={"100%"}
        gap={6}
        p={4}
      >
        <MaterialIcons
          name="arrow-back"
          size={32}
          color="black"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <View
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Pressable
            display="flex"
            alignItems="center"
            justifyContent="center"
            onPress={() => {addPoints()}}
          >
            <Image 
              size="md"
              alt="Image1"
              source={require("../../assets/Images/Teste/star.png")}
              width={256}
              
            />
            <Text
              position="absolute"
            >{points}</Text>
          </Pressable>
          
        </View>
        <MaterialCommunityIcons name="printer" size={32} color="black" />
      </View>
    </View>
  );
};
