import { Component, OnInit, Input } from '@angular/core';
import { FilterInputTemplate } from './model/FilterInputTemplate';
import { FilteringRow } from './model/FilteringItem';
import { FilteringValue } from './model/FilteringValue';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() public filterTemplates: Array<FilterInputTemplate>;

  /**
   * Structure which hold information about inputs which should be rendered.
   * Whole filter consists of FilteringItem among which there is logical OR.
   * e.g.
   * (A column = valueA AND B column = valueB AND .... Xcolumn = valueX) => this is FilteringRow
   * OR
   * (A column = valueA1 AND B (column = valueB1 OR column = valueB2) AND ...)
   * ...
   */
  filteringRowsToRender: Array<FilteringRow> = new Array();

  /**
   * filter input template which is selected and will be added to
   */

  constructor() { }

  ngOnInit() {
    this.filteringRowsToRender.push(new FilteringRow());
  }

  public addFilteringValue(filteringRow: FilteringRow, filterTemplate: FilterInputTemplate) {
    console.log('creating new input element from template')
    let filteringValue;
    switch (filterTemplate.type) {
      case 'number':
        filteringValue = new FilteringValue<number>(filterTemplate); break;
      case 'string':
        filteringValue = new FilteringValue<string>(filterTemplate); break;
      default:
          filteringValue = new FilteringValue(filterTemplate); break;
    }
    filteringRow.addNewFilteringValue(filteringValue);
  }

  public removeFilteringValue(filteringRow: FilteringRow, idxOfFilterValue: number) {
    console.log('creating new input element from template')
    filteringRow.removeFilteringValue(idxOfFilterValue);
  }

  public addFilterRow() {
    this.filteringRowsToRender.push(new FilteringRow());
  }

  public removeFilterRow(idxOfFilteringRow) {
    this.filteringRowsToRender.splice(idxOfFilteringRow, 1);
  }
}
