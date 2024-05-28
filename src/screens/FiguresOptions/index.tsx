import { View, Text, Image } from "@gluestack-ui/themed";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { NavigationProp } from "@react-navigation/native";

export const FiguresOptions = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
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
        </View>
        <View flexDirection="column" alignItems="center">
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
        </View>
        <View flexDirection="column" alignItems="center">
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
        </View>
        <View flexDirection="column" alignItems="center">
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
        </View>
        <View flexDirection="column" alignItems="center">
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
        <View>
          <Text>Stars </Text>
        </View>
        <MaterialCommunityIcons name="printer" size={32} color="black" />
      </View>
    </View>
  );
};
