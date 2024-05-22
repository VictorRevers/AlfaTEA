import { View } from "@gluestack-ui/config/build/theme";
import { ButtonMenu } from "../../components/ButtonPlay";
import { NavigationProp } from "@react-navigation/native";

export function Credit({navigation}: {navigation: NavigationProp<any>}){
    return(
        <>
            <ButtonMenu type="credit" onPress={() => {navigation.navigate("Home")}} />
        </>
    )
}