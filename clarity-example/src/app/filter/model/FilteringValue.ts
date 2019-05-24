import { FilterInputTemplate } from "./FilterInputTemplate";

/**
 * Represents concrete value which is searched in concrete table column.
 * 
 * Among {@link FilteringValue} of various type (different filterInputTemplateIdx) there
 * is logical AND. Among {@link FilteringValue} of the same type there is logical OR.
 */
export class FilteringValue<T> {
    template: FilterInputTemplate; //index to table of available filter input templates
    value: T; //model value of filter (number, string)

    constructor(filterTemplate: FilterInputTemplate) {
        this.template = filterTemplate

    }
}