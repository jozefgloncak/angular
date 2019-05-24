/**
 * Defines
 */
export class FilterInputTemplate {
    columnName: string //name of column (or better of data field which is displayed as column)
    showLabel: string //what will be displayed in dropdown
    type: string //text, radio

    constructor(columnName: string, type:string, showLabel: string) {
        this.columnName = columnName;
        this.type = type;
        this.showLabel = showLabel;
    }
}