export class Node {
    nbr: Set<string>;
    // neighbourNodes:string[] = [];
    id:string;

    constructor(id:string, nbr: Set<string>) {
        this.id = id;
        this.nbr = nbr;
    }

    // public addNeighbour(neighbour:string) {
    //     this.neighbourNodes.push(neighbour);
    //     this.nbr.add(neighbour);
    // }


}