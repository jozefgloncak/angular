import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { NodeModel } from './shared/models/node-model';



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

  parseNodes(data:any): Map<string,NodeModel> {
    let nameToNodes : Map<string,NodeModel> = new Map();
    data.map(rawNodeData => {
      if (rawNodeData.hasOwnProperty("ECUName")) {
        let nodeName : string = rawNodeData.ECUName;
        let nodeFromMap : NodeModel = nameToNodes.get(nodeName); //TODO check existence of this property
        if (nodeFromMap != null) {
          console.log("node ",nodeName ," already created. adding data.")
          nodeFromMap.addDataToReceiverNode(rawNodeData, nameToNodes);
        } else {
          let newNode: NodeModel  = NodeModel.createFromTopLevel(rawNodeData, nameToNodes)
          nameToNodes.set(nodeName, newNode);
          console.log(" node ",nodeName," created");
        }
      }
    });
    return nameToNodes ;
  }

  extractNodeToNeighboursMapping(nameToNode : Map<string, NodeModel>) : Map<string,Set<string>> {
    let nodeToNeighbours : Map<string,Set<string>> = new Map();
    nameToNode.forEach((node, key, map) => {
      let nodeId = node.ECUName;
      let receivers : Set<string> = new Set();      
      if (node.isFromTopLevel) {
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
    let nameToNode : Map<string, NodeModel> = this.parseNodes(this.jsonParsedFile);
    return this.extractNodeToNeighboursMapping(nameToNode);
  }

}