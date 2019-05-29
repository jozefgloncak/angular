import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grocery } from '../models/grocerie-model';
import { FilterInputTemplate } from '../filter/model/FilterInputTemplate';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  filteringTemplate = new Array<FilterInputTemplate>();
  groceriesAvailable: Grocery[] = [];
  groceriesSelected: Grocery[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getGroceries().subscribe(data => {
      let dataAsAray: Array<any> = <Array<any>>data;
      this.groceriesAvailable = dataAsAray.map(element => new Grocery(element));
    });

    let newArray: Array<FilterInputTemplate> = new Array();
    newArray.push(new FilterInputTemplate('subgroup', 'string', 'Subgroup'));
    newArray.push(new FilterInputTemplate('trackinigCode', 'string', 'Tracking code'));
    newArray.push(new FilterInputTemplate('pairingCode', 'string', 'Pairing code'));
    newArray.push(new FilterInputTemplate('name', 'string', 'Name'));
    this.filteringTemplate = newArray
  }
  public getGroceries(): Observable<any> {
    return this.http.get('/assets/data/data.json');
  }

  handleGrocerySelected(grocerySelecting: Grocery) {
    //add to selected
    this.groceriesSelected.push(grocerySelecting);
    this.groceriesSelected = Array.from(this.groceriesSelected); //this hack to force angular to react on change of binded variable


    //remove from available
    let idxOfGrocery = this.groceriesAvailable.findIndex(grocery => grocery.id === grocerySelecting.id);
    this.groceriesAvailable.splice(idxOfGrocery,1);
    this.groceriesAvailable = Array.from(this.groceriesAvailable);
  }

  handleGroceryUnselected(groceryUnselecting: Grocery) {
    //add to available
    this.groceriesAvailable.push(groceryUnselecting);
    this.groceriesAvailable = Array.from(this.groceriesAvailable); //this hack to force angular to react on change of binded variable

    //remove from available
    let idxOfGrocery = this.groceriesSelected.findIndex(grocery => grocery.id === groceryUnselecting.id);
    this.groceriesSelected.splice(idxOfGrocery,1);
    this.groceriesSelected = Array.from(this.groceriesSelected);
  }

}
