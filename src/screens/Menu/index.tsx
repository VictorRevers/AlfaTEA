import { View } from "react-native";
import { ButtonMenu } from "../../components/ButtonMenu";
import { NavigationProp } from "@react-navigation/native";

export function Menu({ navigation }: { navigation: NavigationProp<any> }) {
  return (
    <View>
      <ButtonMenu
        type="play"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}
