import { Text, View } from "@gluestack-ui/themed";
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
                <Text style={styles.txtCredit}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sapiente doloribus tempora natus voluptatem molestias aperiam incidunt aspernatur laudantium molestiae explicabo possimus minus, quo enim libero accusantium necessitatibus amet commodi.</Text>
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
    },
    containerText: {
        width: 374,
        height: 384,
    },
    containerImagem: {
        width: 200,
        height: 384,
    },
    containerBtnVoltar: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: 200,
        height: 384,
    },
    txtCredit: {
        textAlign: "left",
    },
});