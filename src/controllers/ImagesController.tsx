import ImagesBase from "../assets/Images/ImagesBase";

//import fs from 'fs';

//let imagesList: Array<string> = [];
let imagesList: any[];

export default class ImagesController{
  
    static GetImages(type:string){
        if(type == "Teste"){
            imagesList = ImagesBase.Base.Teste;
        }
        
        return imagesList;
    }

    static SelectImage(){
        
    }
}