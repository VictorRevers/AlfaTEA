import ImagesBase from "../assets/Images/ImagesBase";
//import { captureRef } from 'react-native-view-shot';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

//import fs from 'fs';
import * as fs from 'node:fs/promises';

//let imagesList: Array<string> = [];
let imagesList: any[];

export default class ImagesController{
  
    static GetImages(type:string){

        //let imagesList = fs.readdir(`../assets/Images/${type}`);
        if(type == "Animais"){
            imagesList = ImagesBase.Base.Animais;
            console.log(imagesList[1]);
        }
        
        return imagesList;
    }

    static SelectImage(){
        
    }

    static Print(){

    }
}