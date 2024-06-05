import ImagesBase from "../assets/Images/ImagesBase";

let imagesList: any[];

export default class ImagesController{
  
    static GetImages(type:string){

        if(type == "Animais"){
            imagesList = ImagesBase.Base.Animais;          
        }
        else if(type == "Brinquedos"){
            imagesList = ImagesBase.Base.Brinquedos;
        }
        else if(type == "Cenarios"){
            imagesList = ImagesBase.Base.Cenarios;
        }
        else if(type == "Objetos"){
            imagesList = ImagesBase.Base.Objetos;
        }
        else if(type == "Personagens"){
            imagesList = ImagesBase.Base.Personagens;
        }
       
        return imagesList;
    }  

}