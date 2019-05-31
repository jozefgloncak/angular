import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { Grocery } from '../models/grocerie-model';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-groceries-table',
  templateUrl: './groceries-table.component.html',
  styleUrls: ['./groceries-table.component.css']
})
export class GroceriesTableComponent implements OnInit {

  private basicDisplayedColumns: string[] = [
    'subgroup', 'trackingCode', 'pairingCode',
    'name', 'supplement','producer','state','maxPrice','healthInsuranceCompanySurcharge',
    'paymentWay','insuredSurcharge','percentageInsuredSurcharge','lsSurcharge','rdInPackage',
    'indicationLimit','quantityLimitA','quantityLimitB','quantityLimitC','energeticValue',
    'proteins','fats','sacharids','gluten','priceForRD',
  ]
  private _groceriesView : Grocery[] = [];

  public groceriesViewDataSource = new MatTableDataSource<Grocery>(this._groceriesView);


  @Input() action: string = 'add';  //add or remove

  @Input()
  set groceriesView(groceriesView) {
    this._groceriesView = groceriesView;
    this.groceriesViewDataSource.data = groceriesView;
  }

  @Input() title: string = ""

  private _additionalColumns: string[] = []
  @Input()
  set additionalColumns(columns) {
    this.displayedColumns = ['action'].concat(columns, this.basicDisplayedColumns)
  }

  @Output() grocerySelected: EventEmitter<Grocery> = new EventEmitter();
  @Output() countToOrderChanged: EventEmitter<Grocery> = new EventEmitter();

  displayedColumns: string[] = ['action'].concat(this.basicDisplayedColumns);

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

  handleCountToOrderChanged(grocery:Grocery) {
    console.log('amount changed ', grocery)
    this.countToOrderChanged.emit(grocery);
  }

}
