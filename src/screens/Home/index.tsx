import { StyleSheet } from "react-native";
import { ButtonMenu } from "../../components/ButtonPlay";
import { NavigationProp } from "@react-navigation/native";
import { View } from "@gluestack-ui/themed";

export const Home = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <View style={styles.container}>
      <View style={styles.btnAprenda}>
        <ButtonMenu type="aprenda" onPress={() => {
          navigation.navigate("LearnHowToPlay");
        }} />
      </View>
      <View style={styles.btnPlay}>
        <ButtonMenu
          type="play"
          onPress={() => {
            navigation.navigate("FiguresOptions");
          }}
        />
      </View>
      <View style={styles.btnSobre}>
        <ButtonMenu
          type="sobre"
          onPress={() => {
            navigation.navigate("Sobre");
          }}
        />
      </View>
      <View style={styles.btnCredit}>
        <ButtonMenu
          type="credit"
          onPress={() => {
            navigation.navigate("Credit");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 384,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    gap: 80,
  },
  btnAprenda: {
    transform: [{ rotate: "-10deg" }],
  },
  btnPlay: {
    transform: [{ rotate: "-5deg" }],
  },
  btnSobre: {
    transform: [{ rotate: "15deg" }],
  },
  btnCredit: {
    transform: [{ rotate: "-8deg" }],
  },
});
