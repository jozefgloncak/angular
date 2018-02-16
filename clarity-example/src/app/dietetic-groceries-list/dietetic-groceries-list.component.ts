import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Grocery } from '../models/grocerie-model';

@Component({
  selector: 'dietetic-groceries-list',
  templateUrl: './dietetic-groceries-list.component.html',
  styleUrls: ['./dietetic-groceries-list.component.css']
})
export class DieteticGroceriesListComponent implements OnInit {

  private groceries : Grocery[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getGroceries().subscribe(data => {
      //TODO: check whether it is array
      let dataAsAray : Array<any> = <Array<any>>data;
      this.groceries = dataAsAray.map(element => new Grocery(element));
    });
  }

  public getGroceries(): Observable<any> {
    return this.http
      .get('/assets/data/groceries.json');
  }
}
