import { Grocery } from "./grocerie-model";

export class GroceryView {
    grocery : Grocery
    isSelected : boolean;

    constructor(grocery:Grocery) {
        this.grocery = grocery;
        this.isSelected = false;
    }
}