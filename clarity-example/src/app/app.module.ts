import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DieteticGroceriesListComponent } from './dietetic-groceries-list/dietetic-groceries-list.component';
import { AmountSelectorComponent } from './amount-selector/amount-selector.component';
import { FilterComponent } from './filter/filter.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    DieteticGroceriesListComponent,
    AmountSelectorComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
