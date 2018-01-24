import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { JsonParserService } from '../json-parser.service';
import { Node } from '../Node';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent{
  
  selectedFile : File;
  fileContent : string;

  constructor(private jsonParser:JsonParserService) {}

  // https://stackoverflow.com/questions/27254735/filereader-onload-with-result-and-parameter
  // https://stackoverflow.com/questions/41737620/angular2-typescript-filereader-onload-property-does-not-exist
  selectFile(event) {
    this.selectedFile = this.jsonParser.selectFile(event);
  }

  readFile() {
    this.jsonParser.readFile(this.selectedFile);
  }

    // method() {
    //   let temp : Observable<string> = new Observable(observ => 
    //     {setTimeout(()=>{
    //       observ.next("A");
    //     },1000);
    //     setTimeout(()=>{
    //       observ.next("B");
    //     },2000);});
  
    //   temp.subscribe(value => this.fileContent = value);
    // }
}