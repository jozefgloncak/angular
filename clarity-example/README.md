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
* **in progress** - filtering - provided from clarity doesn't worked (even simple string filter). creating own filter based on selecting filtering properties from dropdown and then specifing their value
* sorting of columns
* make it possible to specify name, surname, birth number
* make it possible to upload file to backend
* add butom generate order - which will generate from selectd rows and personal data
text order which can be copy pasted to e-mail
* language support

# ClarityExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
