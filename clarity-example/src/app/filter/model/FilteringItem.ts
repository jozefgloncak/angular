import { FilteringValue } from "./FilteringValue";
import { FilterInputTemplate } from "./FilterInputTemplate";

/**
 * Contains data about one Filtering Row.
 *
 * Data in table can filtered according to several filtering Rows
 * among which there is logical OR. Filtering Row consists of
 * 1..n filtering values.
 */
export class FilteringRow {
    filteringValues: Array<FilteringValue<any>> = new Array();
    filterInputTemplateToAdd: FilterInputTemplate; // filter input template which is selected and will be added to

    constructor() {

    }

    addNewFilteringValue(newValue: FilteringValue<any>) {
        this.filteringValues.push(newValue);
    }

    removeFilteringValue(idxOfFilteringValue: number) {
        this.filteringValues.splice(idxOfFilteringValue, 1);
    }
}