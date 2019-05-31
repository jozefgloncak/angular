# Data
Data (stored in src/assets/data/*.xls) were converted to JSON format by online .
## How to get input data
* Go to [MZSR web page](http://www.health.gov.sk/?zoznam-kategorizovanych-dietetickych-potravin)
* click on the newest item in list
* download XLS file with prefix **cast_H**
* open XLS file and remove first line
* remove merget cell in header (kód vykazujuci, kód párujúci, to have simple header)
* upload XLS file to [converter](http://beautifytools.com/excel-to-json-converter.php)
* click download and store json file locally

Data has been converted from CSV format to JSON by [CSVtoJson converter](http://www.convertcsv.com/csv-to-json.htm)

# Next development
* **done** - use data input with slovak keys in JSON
* **done** - filtering - 
    * **done** - defining of filter (see [filtering](#filtering) for more details.)
    * **done** - filtering of data according to specified filter.
* **done** sorting of columns
* **done** - add button generate order - which will generate from selectd rows and personal data text order which can be copy pasted to e-mail
    * but no button but on data change (selected set or changed number of items) is re-generated output set
* **not started** - make it possible to specify name, surname, birth number for final generation of doctor order. standalone object which will contain form. At main page it will be hiden behind wrench icon above filter.
* **not started** - make it possible to upload file to application with fresh dietetic groceries data in JSON format
* **not started** - language support
* **not started** - validate defined groceries set against amount limit

# Filtering
<a name="filtering"></a>
Filtering consists of 2 parts:
* defining of filter - filter is defined through stanalone component **filter.component**. This component is rendered at the top of the main window (where table is displayed).
It is possible to define following filter building blocks: 
  * filtering value - column value + column name
  * filtering row - set of filtering values
  * filter - set of filtering rows. 
* filtering of data - among above mentioned building blocks of filter are following relations:
  * among filtering values there is logical AND. if there is several filtering values witch the same column name then there is logical OR

        columnA=valueA AND (columnB=valueB OR columnB=valueB) AND columnC=valueC [1]
  * among filtering row there is logical OR

        (colA=valA AND (colB=valB OR colB=valB1) AND colC=valC)
        OR
        ((colA=valA OR colA=valA1) AND colB=valB1 AND colC=valC) [2]
## Filter usage
By selecting column name from dropdown (at the top) it can be defined table column name [3] which can be added to current filtering set.

By clicking on + icon (next to dropdown), input box with [3] will be added and value for this column can be specified. 

By clicking on - icon input box is removed.

By clicking on + icon under drop down, new filtering row is specified. 

More infor about filtering are in [documentation](./src/app/filter/README.md) of filtering component

# Dietetic groceries

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.8 and NodeJS 10.14.2

## Development server

Run `ng serve --open --host=0.0.0.0
` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build. If used flag prod then if you want to run locally edit generated index.hmtl and replace `  <base href="/">` with   `<base href="./">`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
