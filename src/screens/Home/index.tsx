import { ButtonMenu } from "../../components/ButtonPlay";
import { NavigationProp } from "@react-navigation/native";

export const Home = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <>
      <ButtonMenu
        type="play"
        onPress={() => {
          navigation.navigate("Menu");
        }}
      />
      <ButtonMenu
        type="credit"
        onPress={() => {
          navigation.navigate("Credit");
        }}
      />
      <ButtonMenu type="aprenda" onPress={() => {}} />
      <ButtonMenu type="sobre" onPress={() => {}} />
    </>
  );
};
