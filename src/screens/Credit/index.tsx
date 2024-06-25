import { ScrollView, Text, View } from "@gluestack-ui/themed";
import { ButtonMenu } from "../../components/ButtonPlay";
import { NavigationProp } from "@react-navigation/native";
import { Image } from "react-native-svg";
import { StyleSheet } from "react-native";

export function Credit({navigation}: {navigation: NavigationProp<any>}){
    return(
        <View style={styles.containerCredit}>
            <View style={styles.containerImagem}>
                <Image />
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
        </View>
    )
}

const styles = StyleSheet.create({
    containerCredit: {
        display: "flex",
        flexDirection: "row",
        margin: 0,
        padding: 20,
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