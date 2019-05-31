import { FilterInputTemplate } from "./FilterInputTemplate";

/**
 * Represents concrete value which is searched in concrete table column.
 * 
 * Among {@link FilteringValue} of various type (different filterInputTemplateIdx) there
 * is logical AND. Among {@link FilteringValue} of the same type there is logical OR.
 */
export class FilteringValue<T> {
    static count: number = 0;
    template: FilterInputTemplate; //index to table of available filter input templates
    templateIdx: number; //index to table of templates
    value: T; //model value of filter (number, string)
    id: number; //unique identifier of this value

    constructor(filterTemplate: FilterInputTemplate, filterTemplateIdx: number) {
        this.template = filterTemplate
        this.id = FilteringValue.count++;
        this.templateIdx = filterTemplateIdx;

    }
}