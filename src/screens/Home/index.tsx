import { Text } from '@gluestack-ui/themed';
import ImagesController from '../../controllers/ImagesController';
import { useEffect, useState } from 'react';


//const [imagesPath, setImagesPath] = useState([""]);

const GetImages = (type: string) =>{
    //setImagesPath(ImagesController.GetImages(type));
}

export const Home = () => {
    return (
        <Text>Home O.</Text>
    );
}

useEffect(()=>{
    GetImages("Teste");
}, []);



