import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { NodeModel } from './shared/models/node-model';
import { ReceiversAndNodes } from './shared/receivers-and-nodes';



@Injectable()
export class JsonParserService {

  constructor() { }

  rawFile : string;
  jsonParsedFile : any;
  nodes: NodeModel[] = [];

  public selectFile(event) : File {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      return fileList[0];
    }
    return null;
  }

  public readFile(file:File) {
    if (file != null) {
      let reader = new FileReader();
      reader.onload = (e) => {        
        this.rawFile = reader.result
      };
      reader.readAsText(file);
    }
  }

  provideContent() : string {
    return this.rawFile;
  }

  parseNodes(data:any): ReceiversAndNodes {
    let nameToNodes : Map<string,NodeModel> = new Map();
    let receivers : Set<string> = new Set();
    data.map(rawNodeData => {
        let newNode: NodeModel  = new NodeModel(rawNodeData, receivers)
        nameToNodes.set(newNode.ECUName, newNode);
    });
    return new ReceiversAndNodes(nameToNodes, receivers) ;
  }
  
  extractNodeToNeighboursMapping(receiversAndNodes : ReceiversAndNodes) : Map<string,Set<string>> {
    let nodeToNeighbours : Map<string,Set<string>> = new Map();
    let allReceivers :Set<string> = receiversAndNodes.receivers
    let nameToNode : Map<String, NodeModel> = receiversAndNodes.nodes;
    allReceivers.forEach((nodeId , value2 , allReceivers) =>{
      console.log("value1 ", nodeId);
      console.log("value2 ", value2);
      let node : NodeModel = nameToNode.get(nodeId)
      let receivers : Set<string> = new Set();      
      if (node != null) {
        node.Messages.forEach(msg => {
          msg.signals.forEach(sgn => {
            sgn.Receivers.forEach(receiver => {
              receivers.add(receiver);
            })
          })
        })
      }
      nodeToNeighbours.set(nodeId,receivers)
    });
    return nodeToNeighbours;
  }
  
  
  analyzeContent() :  Map<string,Set<string>> {    
    this.jsonParsedFile = JSON.parse(this.rawFile);
    let receiversAndNodes : ReceiversAndNodes = this.parseNodes(this.jsonParsedFile);
    return this.extractNodeToNeighboursMapping(receiversAndNodes);
  }

}