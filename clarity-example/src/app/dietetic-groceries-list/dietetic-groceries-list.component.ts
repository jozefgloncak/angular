import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grocery } from '../models/grocerie-model';
import { GroceryView } from '../models/grocerie-view-model';
import { FilterInputTemplate } from '../filter/model/FilterInputTemplate';

@Component({
  selector: 'dietetic-groceries-list',
  templateUrl: './dietetic-groceries-list.component.html',
  styleUrls: ['./dietetic-groceries-list.component.css']
})
export class DieteticGroceriesListComponent implements OnInit {

  public filteringTemplate = new Array<FilterInputTemplate>();

  public groceriesView : Grocery[] = [];

  constructor(private http: HttpClient) {}

  displayedColumns: string[] = ['subgroup', 'trackingCode'];

  ngOnInit() {
    console.log('zaciatok nacitavania ', new Date().toString());
    this.getGroceries().subscribe(data => {
      console.log('koniec nacitavania ', new Date().toString());
      //TODO: check whether it is array
      let dataAsAray : Array<any> = <Array<any>>data;
      this.groceriesView = dataAsAray.map(element => new Grocery(element));
      console.log('koniec parsovania ', new Date().toString());
    });
    let newArray: Array<FilterInputTemplate> = new Array();
    newArray.push(new FilterInputTemplate('subgroup', 'string', 'Subgroup'));
    newArray.push(new FilterInputTemplate('trackinigCode', 'string', 'Tracking code'));
    newArray.push(new FilterInputTemplate('pairingCode', 'string', 'Pairing code'));
    newArray.push(new FilterInputTemplate('name', 'string', 'Name'));
    this.filteringTemplate = newArray
    console.log('tu');
  }
  public getGroceries(): Observable<any> {
    return this.http
      .get('/assets/data/data.json');
  }

}
