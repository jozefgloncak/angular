import { Injectable } from '@angular/core';
import { Node } from './Node';

@Injectable()
export class JsonParserService {

  constructor() { }

  fileContent : string;
  json : any;

  public readFile(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      let reader = new FileReader();

      reader.onload = (e) => {
        this.fileContent = reader.result;
        console.info(this.fileContent);
        // this.jsonFileContent = JSON.parse(reader.result);
        // console.log(this.jsonFileContent[0].srcIP);
      };
      reader.readAsText(file);
      reader.result
    }
  }

  provideContent() : string {
    return this.fileContent;
  }

  analyzeContent(): Map<string, Node> {
    // let result:TopoForwardStar[] = [];
    this.json = JSON.parse(this.fileContent);

    let result: Map<string, Node> = new Map<string, Node>();
    // console.log("analyzeContent()");
    if (Array.isArray(this.json)) {
      // console.log("analyzeContent(): is array");
      let nodes : any[] = this.json
      for (let node of nodes) {
        if (node.hasOwnProperty("ECUName")) {
          // console.log("analyzeContent(): ECUName: "+node.ECUName)
          let neighbours :Set<string> = this.colectNeighboursFromMessages(node);
          let nodeName : string = node.ECUName
          result.set(nodeName, new Node(nodeName, neighbours))
        }
      }
    }

    return result;
  }

  /**
   * Collects from node.Messages.signals all neighbours
   * 
   * @param node for which neighbours should be collected
   * @returns set of neighbours
   */
  private colectNeighboursFromMessages(node:any) : Set<string> {
    let result : Set<string> = new Set();

    if (node.hasOwnProperty("Messages")) {
      let messages : any = node.Messages;
      if (Array.isArray(messages)) {
        for (let i=0; i<messages.length; i++) {
          let message : any = messages[i];
          if (message.hasOwnProperty("signals")) {
            let signals : any = message.signals;
            if (Array.isArray(signals)) {
              for (let i=0; i<signals.length; i++) {
                let signal : any = signals[i];
                if (signal.hasOwnProperty("Receivers")) {
                  let neighboursFromSignal : string[] = this.parseToNeighbours(signal.Receivers)
                  // console.log(neighboursFromSignal);
                  neighboursFromSignal.forEach((neighbourFromSignal)=>result.add(neighbourFromSignal));
                }
              }
            }
          }
        }
      }
    }
    return result;
  }

  private parseToNeighbours(input: any) : string[] {
    let neighbours : string[] = [];
    if (typeof input === 'string') {
      let inputStr : string = input;
      let neighboursPartial : string[] = inputStr.split(',')
      for (let i = 0; i < neighboursPartial.length; i++) {
        neighboursPartial[i] = neighboursPartial[i].trim();
      }
      neighbours = neighbours.concat(neighboursPartial);
    }
    return neighbours;
  }

}