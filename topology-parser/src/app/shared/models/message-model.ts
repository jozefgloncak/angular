import { SignalModel } from "./signal-model";

export class MessageModel {
    messageID: string;
    messageName: string;
    srcPort: number;
    dstPort: number;
    signals: SignalModel[];

    constructor(data: any, receivers : Set<string>) {
        this.messageID = data.messageID;
        this.messageName = data.messageName;
        this.srcPort = Number.parseInt(data.srcPort);
        this.dstPort = Number.parseInt(data.dstPort);
        this.signals = data.signals.map( s => new SignalModel(s, receivers));
    }
}