
let rightWords: any[] = [];

export class WordsController{
    static addRightWords(obj:any){
        rightWords.push(obj);
    }

    static getRightWords(){
        return rightWords;
    }
}