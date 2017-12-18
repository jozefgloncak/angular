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
// import { FormFieldCustomControlExample } from './form-field-custom-control-example/form-field-custom-control-example.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewUserComponent } from './new-user/new-user.component';
import {MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DisplayUsersTableComponent,
    DisplayUsersOrdinaryTableComponent,
    DisplayTableRowComponent,
    NewUserComponent,
    // FormFieldCustomControlExample
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
