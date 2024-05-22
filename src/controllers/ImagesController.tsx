import ImagesBase from "../assets/Images/ImagesBase";

//import fs from 'fs';
import * as fs from 'node:fs/promises';

//let imagesList: Array<string> = [];
let imagesList: any[];

export default class ImagesController{
  
    static GetImages(type:string){

        //let imagesList = fs.readdir(`../assets/Images/${type}`);
        if(type == "Teste"){
            imagesList = ImagesBase.Base.Teste;
        }
        
        return imagesList;
    }

    static SelectImage(){
        
    }
}