//import { captureRef } from 'react-native-view-shot';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

export default class PrintPDF{

    static async setHTML(image:any, words:string[]){
  
      //const img = await FileSystem.uploadPic(image);

      const html = `
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
          </head>
          <body style="text-align: center;">
            <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
              Hello Expo!
            </h1>
            <img
              src=${image}
              style="width: 90vw;" />
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <div>
                <ul class="wordsList">
                  ${words.map(x=> 
                    `<li>${x[0]}</li>`
                  ).join('')}
                </ul>
              </div>
          </body>
          
        </html>
        `;

      return html;
        
        
    }

    static async printToFile(html:any){
        const { uri } = await Print.printToFileAsync({ html });
        console.log('File has been saved to:', uri);
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    }
}
    
