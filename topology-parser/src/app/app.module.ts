import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopologyComponent } from './topology/topology.component';
import { DialogComponent } from './dialog/dialog.component';
import { JsonParserService } from './json-parser.service';

@NgModule({
  declarations: [
    AppComponent,
    TopologyComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [JsonParserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
