import { MessageModel } from "./message-model";

export class NodeModel {
    srcIP: string; 
    ECUID: string;
    Messages: MessageModel[];
    srcMAC: string;
    ECUName: string;
    isFromTopLevel: boolean

    /**
     * 
     * @param data 
     * @param isFromTopLevel is true if node is specified as toplevel json object. if false then it comes from messages.signals.Receivers
     * @param name string specified if isFromTopLevel == false (node name specified in receiver)
     */
    constructor(data: any, isFromTopLevel: boolean, name:string, nameToNode : Map<String, NodeModel>) {
        this.isFromTopLevel = isFromTopLevel;
        if (isFromTopLevel) {
            this.setValues(data, nameToNode);
        } else {
            this.ECUName = name;
        }
    }

    addDataToReceiverNode(data: any,  nameToNode : Map<String, NodeModel>) {
        if (data.hasOwnProperty("ECUName") && this.ECUName == data.ECUName && !this.isFromTopLevel) {
            this.setValues(data, nameToNode);
            this.isFromTopLevel = true;
        }
    }

    private setValues(data : any, nameToNode : Map<String, NodeModel>) {
        if (data.hasOwnProperty("srcIP")) {
            this.srcIP = data.srcIP;
        }
        if (data.hasOwnProperty("ECUID")) {
            this.srcIP = data.srcIP;
        }
        if (data.hasOwnProperty("Messages")) {
            this.Messages = data.Messages.map( msg => new MessageModel(msg, nameToNode));;
        }
        if (data.hasOwnProperty("srcMAC")) {
            this.srcMAC = data.srcMAC;
        }
        if (data.hasOwnProperty("ECUName")) {
            this.ECUName = data.ECUName;
        }
    }

    public static createFromReceiver(name:string) :NodeModel {
        return new NodeModel(null,false, name, null);
    }
    
    public static createFromTopLevel(data :any,  nameToNode : Map<String, NodeModel>) :NodeModel {
        return new NodeModel(data, true, null, nameToNode);
    }

}