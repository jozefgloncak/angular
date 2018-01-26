import { MessageModel } from "./message-model";

export class NodeModel {
    srcIP: string; 
    ECUID: string;
    Messages: MessageModel[];
    srcMAC: string;
    ECUName: string;

    /**
     * 
     * @param data 
     * @param isFromTopLevel is true if node is specified as toplevel json object. if false then it comes from messages.signals.Receivers
     * @param name string specified if isFromTopLevel == false (node name specified in receiver)
     */
    constructor(data: any,  receivers : Set<string>) {
        this.setValues(data, receivers);
    }

    private setValues(data : any, receivers : Set<string>) {
        if (data.hasOwnProperty("srcIP")) {
            this.srcIP = data.srcIP;
        }
        if (data.hasOwnProperty("ECUID")) {
            this.srcIP = data.srcIP;
        }
        if (data.hasOwnProperty("Messages")) {
            this.Messages = data.Messages.map( msg => new MessageModel(msg, receivers));;
        }
        if (data.hasOwnProperty("srcMAC")) {
            this.srcMAC = data.srcMAC;
        }
        if (data.hasOwnProperty("ECUName")) {
            this.ECUName = data.ECUName;
        }
    }
}