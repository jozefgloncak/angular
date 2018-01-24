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

  loadFile() {
    this.fileContent = this.jsonParser.provideContent();
  }

  analyzeContent() {
    let nodeNameToNode : Map<string, Node> = this.jsonParser.analyzeContent();    
    this.nodes = Array.from(nodeNameToNode.values());
    // console.log(this.nodes);
  }

}
