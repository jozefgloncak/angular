import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() filterSpecified =  new EventEmitter<Object>();

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

  filter: object[] = [];

  /**
   * filter input template which is selected and will be added to
   */

  constructor() { }

  ngOnInit() {
    this.filteringRowsToRender.push(new FilteringRow());
    this.filter.push({});
  }

  public addFilteringValue(filteringRow: FilteringRow, filteringRowIdx: number, filterTemplateIdx: number) {
    console.log('creating new input element from template')
    let filteringValue: FilteringValue<any>;
    switch (this.filterTemplates[filterTemplateIdx].type) {
      case 'number':
        filteringValue = new FilteringValue<number>(this.filterTemplates[filterTemplateIdx], filterTemplateIdx); break;
      case 'string':
        filteringValue = new FilteringValue<string>(this.filterTemplates[filterTemplateIdx], filterTemplateIdx); break;
      default:
          filteringValue = new FilteringValue(this.filterTemplates[filterTemplateIdx], filterTemplateIdx); break;
    }
    filteringRow.addNewFilteringValue(filteringValue);

    if (!this.filter[filteringRowIdx][filterTemplateIdx]) {
      this.filter[filteringRowIdx][filterTemplateIdx] = {count:0}
    }
    this.filter[filteringRowIdx][filterTemplateIdx][filteringValue.id] = filteringValue;
    let filterTemplate: Object = this.filter[filteringRowIdx][filterTemplateIdx];
    filterTemplate['count'] = ++filterTemplate['count'];
  }

  public removeFilteringValue(filteringRow: FilteringRow, filteringRowIdx: number, idxOfFilterValue: number, filteringValue: FilteringValue<any>) {
    console.log('creating new input element from template')
    filteringRow.removeFilteringValue(idxOfFilterValue);
    this.filter[filteringRowIdx][filteringValue.templateIdx][filteringValue.id] = undefined;
    let filterTemplate: Object = this.filter[filteringRowIdx][filteringValue.templateIdx];
    filterTemplate['count'] = --filterTemplate['count'];
    if (filterTemplate['count']===0) {
      this.filter[filteringRowIdx][filteringValue.templateIdx] = undefined;
    }
  }

  public addFilterRow() {
    this.filteringRowsToRender.push(new FilteringRow());
    this.filter.push({});

  }

  public removeFilterRow(idxOfFilteringRow) {
    this.filteringRowsToRender.splice(idxOfFilteringRow, 1);
    this.filter.splice(idxOfFilteringRow, 1);
  }

  public filterData() {
    this.filterSpecified.emit(this.filter);
  }
}
