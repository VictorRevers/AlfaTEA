import { Text, View } from "@gluestack-ui/themed";
import { ButtonMenu } from "../../components/ButtonMenu";
import { StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { Image } from "react-native-svg";
import { BR } from "@expo/html-elements";

export function Sobre({navigation}: {navigation: NavigationProp<any>}){
    return(
        <View style={styles.containerSobre}>
            <View style={styles.containerImagem}>
                <Image />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.txtSobre}>{'O JOGO ALFA TEA TRABALHA A CONSCIÊNCIA FONÉTICA\nPARA AUXILIAR NO PROCESSO\nDE ALFABETIZAÇÃO,\nATRAVÉS DA GAMIFICAÇÃO\nE DO APOIO VISUAL.\nFOI PENSADO PARA\nCRIANÇAS COM\nTRANSTORNO DO ESPECTRO AUTISTA\n(TEA)'}</Text>
            </View>
            <View style={styles.containerBtnVoltar}>
                <View>
                    <ButtonMenu type="voltar" onPress={() => {navigation.navigate("Home")}} />
                </View>
            </View>
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