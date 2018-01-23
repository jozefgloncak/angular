import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent{

  
  public fileContent:string;
  public jsonFileContent:any;

  public displayCtx:boolean;

  // https://stackoverflow.com/questions/27254735/filereader-onload-with-result-and-parameter
  // https://stackoverflow.com/questions/41737620/angular2-typescript-filereader-onload-property-does-not-exist
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      let reader = new FileReader();

      reader.onload = (e) => {
        console.info(reader.result);
        this.fileContent = reader.result;
        this.jsonFileContent = JSON.parse(reader.result);
        console.log(this.jsonFileContent[0].srcIP);
      };
      reader.readAsText(file);
      reader.result
    }
  }

}