import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule
        ,MatCheckboxModule
        ,MatSortModule
        ,MatDatepickerModule
        ,MatNativeDateModule
      } from '@angular/material';

import { MatTableModule } from '@angular/material/table';
import { MatHeaderCell } from '@angular/material/table';
import { MatCell } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DisplayUsersTableComponent } from './display-users-table/display-users-table.component';
import { UserService } from './user.service';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplayUsersOrdinaryTableComponent } from './display-users-ordinary-table/display-users-ordinary-table.component';
import { DisplayTableRowComponent } from './display-table-row/display-table-row.component';
// import { FormFieldCustomControlExample } from './form-field-custom-control-example/form-field-custom-control-example.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewUserComponent } from './new-user/new-user.component';
import {MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TableSortingExampleComponent } from './table-sorting-example/table-sorting-example.component';
import { MessageComponent } from './message/message.component';
import { FormElementDatePickerComponent } from './form-element-date-picker/form-element-date-picker.component';
import { FormElementComponent } from './form-element/form-element.component';
import { FormElementCheckboxComponent } from './form-element-checkbox/form-element-checkbox.component';
import { FormElementInputComponent } from './form-element-input/form-element-input.component';
import { DemoNgClassComponent } from './demo-ng-class/demo-ng-class.component';




@NgModule({
  declarations: [
    AppComponent,
    DisplayUsersTableComponent,
    DisplayUsersOrdinaryTableComponent,
    DisplayTableRowComponent,
    NewUserComponent,
    TableSortingExampleComponent,
    MessageComponent,
    FormElementDatePickerComponent,
    FormElementComponent,
    FormElementCheckboxComponent,
    FormElementInputComponent,
    DemoNgClassComponent,
    // FormFieldCustomControlExample
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  providers: [UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
