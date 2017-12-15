import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatHeaderCell } from '@angular/material/table';
import { MatCell } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DisplayUsersTableComponent } from './display-users-table/display-users-table.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplayUsersOrdinaryTableComponent } from './display-users-ordinary-table/display-users-ordinary-table.component';
import { DisplayTableRowComponent } from './display-table-row/display-table-row.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayUsersTableComponent,
    DisplayUsersOrdinaryTableComponent,
    DisplayTableRowComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
