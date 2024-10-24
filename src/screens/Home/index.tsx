import { StyleSheet } from "react-native";
import { ButtonMenu } from "../../components/ButtonMenu";
import { NavigationProp } from "@react-navigation/native";
import { View, ImageBackground, Image } from "@gluestack-ui/themed";
import ImagesController from "../../controllers/ImagesController";

export const Home = ({ navigation }: { navigation: NavigationProp<any> }) => {

  const imagesList = ImagesController.GetImages("Hud");

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={imagesList[6]}>
        <View style={styles.logoAlfaTea}>
          <Image source={imagesList[3]} style={styles.logoImg} />
        </View>
        <View style={styles.containerBtns}>
          <View>
            <ButtonMenu type="aprenda" onPress={() => {
              navigation.navigate("LearnHowToPlay");
            }} />
          </View>
          <View>
            <ButtonMenu
              type="play"
              onPress={() => {
                navigation.navigate("FiguresOptions");
              }}
            />
          </View>
          <View>
            <ButtonMenu
              type="sobre"
              onPress={() => {
                navigation.navigate("Sobre");
              }}
            />
          </View>
          <View>
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
  logoAlfaTea: {
     width: "100%",
     display: "flex",
     justifyContent: "flex-end",
     alignItems: "flex-end",

  },
  logoImg: {
    width: 100,
    height: 100,
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
    marginTop: 30
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
  /*btnAprenda: {
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
  },*/
});
