import { Component, Inject } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { JsonParserService } from '../json-parser.service';
import { Node } from '../Node';
import { Observable } from 'rxjs/Observable';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent{
  
  selectedFile : File;
  fileContent : string;  

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,    
    private jsonParser:JsonParserService) { }


  onOkClick(): void {
    this.dialogRef.close();
  }

  // https://stackoverflow.com/questions/27254735/filereader-onload-with-result-and-parameter
  // https://stackoverflow.com/questions/41737620/angular2-typescript-filereader-onload-property-does-not-exist
  selectFile(event) {
    this.selectedFile = this.jsonParser.selectFile(event);
  }

  readFile() {
    this.jsonParser.readFile(this.selectedFile);
  }
}