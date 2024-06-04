import { NavigationProp } from "@react-navigation/native";

import { Context } from "../../../App";
import { View, Text, Button } from "@gluestack-ui/themed";
import { useContext } from "react";

export const Game = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [selectedImage, setSelectedImage] = useContext(Context);

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
        <View borderColor="black" borderWidth="$1" w="40%" h="100%"></View>
        <View borderColor="black" borderWidth="$1" w="60%" h="100%"></View>
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
