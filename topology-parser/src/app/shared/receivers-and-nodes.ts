import { NodeModel } from './models/node-model'

export class ReceiversAndNodes {
    nodes : Map<string, NodeModel>
    receivers : Set<string>

    constructor(nodes : Map<string, NodeModel>, receivers : Set<string>) {
        this.nodes = nodes;
        this.receivers = receivers;
        console.log(this.receivers);
    }
}