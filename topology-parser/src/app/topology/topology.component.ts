import { Component, OnInit } from '@angular/core';
import { JsonParserService } from '../json-parser.service';
import { Node } from '../Node';

@Component({
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.css']
})
export class TopologyComponent implements OnInit {
  
  nodes : Node[];
  displayCtx:boolean;
  public fileContent:string;

  
  constructor(private jsonParser:JsonParserService) { }

  // loadFile() {
  //   this.jsonParser.provideContent().subscribe(
  //     fileContent => {this.fileContent = fileContent}
  //   );
  // }

  analyzeContent() {
    this.jsonParser.analyzeContent();    
    this.nodes = this.jsonParser.nodes;
    // console.log(this.nodes);
  }

}
