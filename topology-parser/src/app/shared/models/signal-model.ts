export class SignalModel {
    CANID: string;
    Receivers: string[] = [];
    destMAC: string;
    signalID: string;
    destIP: string;
    signalName: string;

    constructor(data: any, allReceivers : Set<string>) {
        this.CANID = data.CANID;
        let receivers : string[] = data.Receivers.split(',');
        receivers.forEach(receiver => {
            let trimmedReceiver : string = receiver.trim()
            this.Receivers.push(trimmedReceiver);
            allReceivers.add(trimmedReceiver);
        })
        this.destMAC = data.destMAC;
        this.signalID = data.signalID;
        this.destIP = data.destIP;
        this.signalName = data.signalName
    }
}