import * as fs from 'expo-file-system';

var path:string = '';

export default class FileSystem{
    static createDir = async()=>{
        path = `${fs.documentDirectory}tempimg/`;

        const dirInfo = await fs.getInfoAsync(path);

        if(!dirInfo){
            await fs.makeDirectoryAsync(path, {}).then(()=>{
                console.log("DIRETÓRIO CRIADO COM SUCESSO!");
                return true;
            }).catch((err)=>{
                console.log("FALHA AO CRIAR DIRETÓRIO: "+err);
                return false;
            })
        }     
    }

     
    static getPic = ()=>{
        path = `${fs.documentDirectory}tempimg/img.png`;
        return path;
    }

    static uploadPic = async(from:string)=>{
        path = `${fs.documentDirectory}tempimg/img.png`
        await fs.copyAsync({
            from: from,
            to: path
           }).then(()=>{    
            console.log("Upload concluido");
            return path;
           }).catch((err)=>{
            console.log("Erro ao carregar imagem: "+err);
            return '';
           })
           return path;
    }
}