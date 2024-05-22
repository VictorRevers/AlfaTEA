import { config } from '@gluestack-ui/config';
import {Box, GluestackUIProvider, Text } from '@gluestack-ui/themed';
import ImagesController from './src/controllers/ImagesController';
import ImagesBase from './src/assets/Images/ImagesBase';
import {Image, StyleSheet} from "react-native";
import { useEffect, useState } from 'react';

let imagesPath = ImagesController.GetImages("Teste");

const GetImages = (type: string) =>{
    imagesPath = ImagesController.GetImages(type);
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});


export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Box>
        <Text>Helloooo</Text>
        <Image style={styles.tinyLogo}  source={/*require('./src/assets/Images/Teste/jogo.PNG')*/imagesPath[1]}/>
      </Box>
    </GluestackUIProvider>
  );
}

/*useEffect(()=>{
  GetImages("Teste");
}, []);*/



