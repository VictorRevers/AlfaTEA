import { StyleSheet } from "react-native";
import { ButtonMenu } from "../../components/ButtonMenu";
import { NavigationProp } from "@react-navigation/native";
import { View, ImageBackground } from "@gluestack-ui/themed";
import ImagesController from "../../controllers/ImagesController";

export const Home = ({ navigation }: { navigation: NavigationProp<any> }) => {

  const imagesList = ImagesController.GetImages("Hud");

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={imagesList[0]}>
        <View style={styles.containerBtns}>
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerBtns: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: '100%',
    height: '100%',
    marginTop: 130
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // ou 'contain', 'stretch', etc.
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: '100%',
    height: '100%',
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
