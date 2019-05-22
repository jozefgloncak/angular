import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grocery } from '../models/grocerie-model';
import { GroceryView } from '../models/grocerie-view-model';

@Component({
  selector: 'dietetic-groceries-list',
  templateUrl: './dietetic-groceries-list.component.html',
  styleUrls: ['./dietetic-groceries-list.component.css']
})
export class DieteticGroceriesListComponent implements OnInit {

  public groceriesView : GroceryView[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getGroceries().subscribe(data => {
      //TODO: check whether it is array
      let dataAsAray : Array<any> = <Array<any>>data;
      this.groceriesView = dataAsAray.map(element => new GroceryView(new Grocery(element)));
    });
  }

  public getGroceries(): Observable<any> {
    return this.http
      .get('/assets/data/groceries.json');
  }
}
