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
  groceriesSelectedView: Grocery[] = [];
  groceriesAvailableView: Grocery[] = [];
  textResult: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getGroceries().subscribe(data => {
      let dataAsAray: Array<any> = <Array<any>>data;
      this.groceriesAvailable = dataAsAray.map(element => new Grocery(element));
      this.generateGroceriesToView();
    });

    let newArray: Array<FilterInputTemplate> = new Array();
    newArray.push(new FilterInputTemplate('subgroup', 'string', 'Subgroup'));
    newArray.push(new FilterInputTemplate('trackingCode', 'string', 'Tracking code'));
    newArray.push(new FilterInputTemplate('pairingCode', 'string', 'Pairing code'));
    newArray.push(new FilterInputTemplate('name', 'string', 'Name'));
    this.filteringTemplate = newArray
  }
  public getGroceries(): Observable<any> {
    return this.http.get('./assets/data/data.json');
  }

  /**
   *
   * Handles event from groceries-table component which display available groceries.
   *
   * @param grocerySelecting
   */
  handleGrocerySelected(grocerySelecting: Grocery) {
    grocerySelecting.isHiddenBecauseSelected = true;
    this.generateGroceriesToView();
    this.generateResultText();
  }

  /**
   * Handles event from groceries-table component which display selected groceries.
   *
   * @param groceryUnselecting
   */
  handleGroceryUnselected(groceryUnselecting: Grocery) {
    groceryUnselecting.isHiddenBecauseSelected = false;
    this.generateGroceriesToView();
    this.generateResultText();
  }

  /**
   * Handles event from filter component.
   *
   * This event occures when filter is defined and filter button is hit.
   * Function iterate over all available groceries and for each evaluate whether it match provided filter
   */
  handleFilterSpecified(filter: Object[]) {
    this.groceriesAvailable.forEach(grocery => {
      let foundFilterRowMatch: boolean = false;
      let i: number = 0;
      while (!foundFilterRowMatch && i < filter.length) {
        foundFilterRowMatch = this.tryToMatchFilterRow(filter[i++], grocery);
      }
      grocery.isHiddenBecauseFilterOut = !foundFilterRowMatch;
    })
    this.groceriesAvailable = Array.from(this.groceriesAvailable);

    this.generateGroceriesToView();
  }

  /**
   * Evaluate whether provided filter row match data in grocery.
   *
   * @param filterRow
   * @param grocery
   * @returns true if grocery match filter row, false otherwise
   */
  tryToMatchFilterRow(filterRow: Object, grocery: Grocery): boolean {
    for (let filteringTemplateIdx in filterRow) {
      if (!this.tryToMatchFilteringValue(filterRow[filteringTemplateIdx], grocery)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Evaluate whether provided filter column value match grocery column value.
   *
   * If several values specified then logical OR is applied. It means that
   * if first match from filter value is found then there is match (next values
   * aren't evaluated).
   */
  tryToMatchFilteringValue(filteringValuesForColumn: Object, grocery: Grocery): boolean {
    let foundFilteringValueMatch: boolean = false;
    for (let filteringValueKey in filteringValuesForColumn) {
      if (filteringValueKey !== 'count') {
        let filteringValue = filteringValuesForColumn[filteringValueKey];
        if (grocery[filteringValue.template.columnName] === undefined) {
          continue; //some column values doesn't have to be specified. therefore match can't be and continue to next value
        }
        let columnValue = grocery[filteringValue.template.columnName].toLowerCase();
        let searchedValue = filteringValue.value.toLowerCase();
        if (columnValue.indexOf(searchedValue) !== -1) {
          foundFilteringValueMatch = true;
          break;
        }
      }
    }
    return foundFilteringValueMatch;
  }

  /**
   * Generate data which are displayed in tables according to filtering and selecting
   * preferencies.
   *
   * If user filter data then in available groceries there are only those which:
   * - match filter
   * - weren't selected
   *
   * If user unselect some rows then those are returned back to available groceries,
   * but arent displayed if filter is applayed and doesn't match returned rows.
   */
  generateGroceriesToView() {
    this.groceriesAvailableView = [];
    this.groceriesSelectedView = [];

    for (let grocery of this.groceriesAvailable) {
      if (!grocery.isHiddenBecauseFilterOut && !grocery.isHiddenBecauseSelected) {
        this.groceriesAvailableView.push(grocery);
      } else if (grocery.isHiddenBecauseSelected) {
        this.groceriesSelectedView.push(grocery);
      }
    }
  }

  generateResultText() {
    let result = "";
    this.groceriesSelectedView.forEach(selectedGrocery => {
      result = result + selectedGrocery.countToOrder + " * \t" +
       selectedGrocery.trackingCode + "\t" +
       selectedGrocery.name + "\n";
    })
    console.log('generate result');
    this.textResult = result;
  }

  handleCountToOrderChanged() {
    this.generateResultText();
  }

}
