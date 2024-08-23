import { ImageBackground, ScrollView, Text, View, Image } from "@gluestack-ui/themed";
import { ButtonMenu } from "../../components/ButtonMenu";
import { NavigationProp } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import ImagesController from "../../controllers/ImagesController";

export function Credit({navigation}: {navigation: NavigationProp<any>}){
    const imagesList = ImagesController.GetImages("Hud");

    return(
        <View style={styles.containerCredit}>
            <ImageBackground style={styles.backgroundImage} source={imagesList[6]}>
                <View style={styles.containerImagem}>
                    <Image style={styles.imageLogo} source={imagesList[3]} />
                </View>
                <View style={styles.containerText}>
                    <ScrollView>
                        <Text style={styles.txtCredit}>{'AUTORES\n\nRENATA MARQUES COSTA\nE-MAIL: RENATAMARQUES.COSTA@GMAIL.COM\n\nADRIANA DA SILVA LISBOA TOMAZ\nE-MAIL: ATOMAZ@UNICARIOCA.EDU.BR\n\nMARIZA SUELI DE OLIVEIRA SODRÉ\nE-MAIL: MARIZABIO@HOTMAIL.COM\n\nPROGRAMAÇÃO\n\nFELIPE MARTINS DE MEDEIROS\nE-MAIL: FELIPEMEDEIROSINFO@GMAIL.COM\n\nVICTOR REVERS KASNOWSKI\nE-MAIL: VICTOR.KASNOWSKI@GMAIL.COM\n\nMATEUS LOPES DA SILVA\nE-MAIL:MATEUSLOPES1717@GMAIL.COM\n\nLORHAN LUCAS DA SILVA FERNANDES\nE-MAIL:LORHAN123@GMAIL.COM\n\nALICE LYRA\nE-MAIL:ALICE-LYRA@HOTMAIL.COM\n\nCOORDENADOR DO LABORATÓRIO DE TECNOLOGIA APLICADA\n\nANDRÉ COTELLI DO ESPÍRITO SANTO\nE-MAIL: ASANTO@UNICARIOCA.EDU.BR'}</Text>
                    </ScrollView>
                </View>
                <View style={styles.containerBtnVoltar}>
                    <View>
                        <ButtonMenu type="voltar" onPress={() => {navigation.navigate("Home")}} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    containerCredit: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // ou 'contain', 'stretch', etc.
        display: "flex",
        flexDirection: "row",
        width: '100%',
        height: '100%',
    },
    containerText: {
        width: "50%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    containerImagem: {
        width: "25%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    imageLogo: {
        width: "100%",
        height: 125,
    },
    containerBtnVoltar: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: "25%",
        height: "100%",
    },
    txtCredit: {
        textAlign: "left",
        fontSize: 14,
        fontWeight: "bold",
    },
});