import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grocery } from '../models/grocerie-model';
import { FilterInputTemplate } from '../filter/model/FilterInputTemplate';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { GrocerySelecting } from '../models/grocerie-selecting-model';

@Component({
  selector: 'app-groceries-table',
  templateUrl: './groceries-table.component.html',
  styleUrls: ['./groceries-table.component.css']
})
export class GroceriesTableComponent implements OnInit {

  private _groceriesView : Grocery[] = [];

  public groceriesViewDataSource = new MatTableDataSource<Grocery>(this._groceriesView);

  @Input()
  set groceriesView(groceriesView) {
    this._groceriesView = groceriesView;
    this.groceriesViewDataSource.data = groceriesView;
  }

  @Input() title: string = ""

  @Output() grocerySelected: EventEmitter<GrocerySelecting> = new EventEmitter();

  displayedColumns: string[] = [
    'subgroup', 'trackingCode', 'pairingCode',
    'name', 'supplement','producer','state','maxPrice','healthInsuranceCompanySurcharge',
    'paymentWay','insuredSurcharge','percentageInsuredSurcharge','lsSurcharge','rdInPackage',
    'indicationLimit','quantityLimitA','quantityLimitB','quantityLimitC','energeticValue',
    'proteins','fats','sacharids','gluten','priceForRD',
  ]

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.groceriesViewDataSource.paginator = this.paginator;
    this.groceriesViewDataSource.sort = this.sort;
  }

  rowDblClickHandler(grocery:Grocery) {
    this.grocerySelected.emit(grocery);
  }

}
