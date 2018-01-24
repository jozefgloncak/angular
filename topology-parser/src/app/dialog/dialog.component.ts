import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { JsonParserService } from '../json-parser.service';
import { Node } from '../Node';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent{
  
  public jsonFileContent:any;
  public nodes:Node[];


  constructor(private jsonParser:JsonParserService) {}


  // https://stackoverflow.com/questions/27254735/filereader-onload-with-result-and-parameter
  // https://stackoverflow.com/questions/41737620/angular2-typescript-filereader-onload-property-does-not-exist
  fileChange(event) {
    this.jsonParser.readFile(event);
  }



}