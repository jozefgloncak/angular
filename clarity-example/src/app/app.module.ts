import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DieteticGroceriesListComponent } from './dietetic-groceries-list/dietetic-groceries-list.component';
import { AmountSelectorComponent } from './amount-selector/amount-selector.component';




@NgModule({
  declarations: [
    AppComponent,
    DieteticGroceriesListComponent,
    AmountSelectorComponent
  ],
  imports: [
    BrowserModule,  
    ClarityModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
