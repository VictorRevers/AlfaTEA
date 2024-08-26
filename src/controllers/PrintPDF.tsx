//import { captureRef } from 'react-native-view-shot';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import ImagesController from './ImagesController';
import { useRef } from 'react';

export default class PrintPDF{

    static async setHTML(image:any){
      
      const imagesList = ImagesController.GetImages("Hud");
      //const img = await FileSystem.uploadPic(image);

      const html = `
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
          </head>
          <body style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 300px;">
            <h1>Minhas Conquistas!</h1>
            <img src=${image} style="width: 90%; height: 30%;" />
          </body>
          
        </html>
        `;

      return html;
        
        
    }

    static async printToFile(html:any){
      try{
        const { uri } = await Print.printToFileAsync({ html });
        
        console.log('File has been saved to:', uri);
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
      } catch(error){
        console.log(error);
      }
        
    }

    
}
    
