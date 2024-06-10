import { View, Text, Image } from "@gluestack-ui/themed";

type modalProps = {
    word: string,
    points: number,
    image: any,
    isCorrect: boolean,
    isOpen: boolean,
    onPress: () => void,
}

export function ModalResult(props: modalProps){
    if(props.isCorrect && props.isOpen){
        return(
            <View
                backgroundColor="white"
                position="absolute"
                width="70%"
                height="80%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                borderColor="green"
                borderWidth="$2"
                padding={20}
            >
                <View
                    display="flex"
                    flexDirection="row"
                    borderColor="green"
                    borderWidth="$2"
                    width="100%"
                    height="70%"
                >
                    <View
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderColor="green"
                        borderWidth="$2"
                        width="50%"
                    >
                        <Text color="black" fontWeight="bold" fontSize={25} textAlign="center">{'PARABÉNS!\nVOCÊ ACERTOU!\nGANHOU UMA ESTRELA!\nCONTINUE!'}</Text>
                    </View>
                    <View
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderColor="green"
                        borderWidth="$2"
                        width="50%"
                    >
                        <Image
                            borderWidth="$2"
                            w="100%"
                            h="100%"
                            alt="Image1"
                            source={
                            /*{
                            uri: "http://placekitten.com/300/300",
                            }*/props.image}
                        />
                    </View>
                </View>
                <View
                    display="flex"
                    flexDirection="row"
                >
                    <View
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="row"
                        width="50%"
                    >
                        <View
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection="row"
                            width="100%"
                            height="100%"
                        >
                            <Image
                                size="lg"
                                alt="Image1"
                                source={require("../../assets/Images/Teste/star.png")}
                                width={600}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            />
                            <Text position="absolute" fontWeight="bold" fontSize={30}>
                                {props.points}
                            </Text>
                        </View>
                        
                    </View>
                    <View
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="row"
                        backgroundColor="green"
                        width="50%"
                    >
                        <Text fontWeight="bold" color="black" fontSize={40}>{props.word}</Text>
                    </View>
                </View>
            </View>
        )
    } else if(!props.isCorrect && props.isOpen){
        return(
            <View
                backgroundColor="white"
                position="absolute"
                width="70%"
                height="80%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                borderColor="red"
                borderWidth="$2"
                padding={20}
            >
                <View
                    display="flex"
                    flexDirection="row"
                    borderColor="red"
                    borderWidth="$2"
                    width="100%"
                    height="70%"
                >
                    <View
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderColor="red"
                        borderWidth="$2"
                        width="50%"
                    >
                        <Text color="black" fontWeight="bold" fontSize={25} textAlign="center">{'PARABÉNS!\nVOCÊ ACERTOU!\nGANHOU UMA ESTRELA!\nCONTINUE!'}</Text>
                    </View>
                    <View
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderColor="red"
                        borderWidth="$2"
                        width="50%"
                    >
                        <Image
                            borderWidth="$2"
                            w="100%"
                            h="100%"
                            alt="Image1"
                            source={
                            /*{
                            uri: "http://placekitten.com/300/300",
                            }*/props.image}
                        />
                    </View>
                </View>
                <View
                    display="flex"
                    flexDirection="row"
                >
                    <View
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="row"
                        width="50%"
                    >
                        <View
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection="row"
                            width="100%"
                            height="100%"
                        >
                            <Image
                                size="lg"
                                alt="Image1"
                                source={require("../../assets/Images/Teste/star.png")}
                                width={600}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            />
                            <Text position="absolute" fontWeight="bold" fontSize={30}>0</Text>
                        </View>
                        
                    </View>
                    <View
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="row"
                        backgroundColor="red"
                        width="50%"
                    >
                        <Text fontWeight="bold" color="black" fontSize={40}>{props.word}</Text>
                    </View>
                </View>
            </View>
        )
    }
    
    
}