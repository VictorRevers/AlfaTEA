//import { captureRef } from 'react-native-view-shot';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import ImagesController from './ImagesController';

export default class PrintPDF{

    static async setHTML(image:any){
      
      const imagesList = ImagesController.GetImages("Hud");
      //const img = await FileSystem.uploadPic(image);

      const html = `
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
          </head>
          <body>
            <div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 300px;">
              <img src=${image} style="width: 90%; height: 30%;" />
            </div>
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
    
