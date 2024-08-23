import { ImageBackground, Text, View, Image } from "@gluestack-ui/themed";
import { ButtonMenu } from "../../components/ButtonMenu";
import { StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { BR } from "@expo/html-elements";
import ImagesController from "../../controllers/ImagesController";

export function Sobre({navigation}: {navigation: NavigationProp<any>}){
    const imagesList = ImagesController.GetImages("Hud");

    return(
        <View style={styles.containerSobre}>
            <ImageBackground style={styles.backgroundImage} source={imagesList[6]}>
                <View style={styles.containerImagem}>
                    <Image style={styles.imageLogo} source={imagesList[3]} />
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.txtSobre}>{'O JOGO ALFA TEA TRABALHA A CONSCIÊNCIA FONÉTICA\nPARA AUXILIAR NO PROCESSO\nDE ALFABETIZAÇÃO,\nATRAVÉS DA GAMIFICAÇÃO\nE DO APOIO VISUAL.\nFOI PENSADO PARA\nCRIANÇAS COM\nTRANSTORNO DO ESPECTRO AUTISTA\n(TEA)'}</Text>
                </View>
                <View style={styles.containerBtnVoltar}>
                    <View>
                        <ButtonMenu type="voltar" onPress={() => {navigation.navigate("Home")}} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    containerSobre: {
        display: "flex",
        flexDirection: "row",
        margin: 0,
        padding: 0,
    },
    backgroundImage: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
    },
    imageLogo: {
        width: "100%",
        height: 130,
    },
    containerText: {
        width: 374,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    containerImagem: {
        width: 200,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    containerBtnVoltar: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: 200,
        height: "99%",
    },
    txtSobre: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
});