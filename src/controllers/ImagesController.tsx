import * as fs from 'fs';

let imagesList: Array<string> = [];

export default class ImagesController{
  
    static GetImages(type:string){
        imagesList = fs.readdirSync(`../assets/Images/${type}`);
    }

    static SelectImage(){
        imagesList
    }
}