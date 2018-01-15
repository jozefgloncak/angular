import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommComponent } from './comm/comm.component';
import { CommRoutingModule } from './comm-routing.module'

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule
        ,MatCheckboxModule
        ,MatSortModule
        ,MatDatepickerModule
        ,MatNativeDateModule
      } from '@angular/material';

import { MatHeaderCell } from '@angular/material/table';
import { MatCell } from '@angular/material/table';

import { UserService } from '../user.service';
// import { MessageService } from '../message.service';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
// import { MessageComponent } from '../message/message.component';
import { FormElementDatePickerComponent } from './form-element-date-picker/form-element-date-picker.component';
import { FormElementComponent } from './form-element/form-element.component';
import { FormElementCheckboxComponent } from './form-element-checkbox/form-element-checkbox.component';
import { FormElementInputComponent } from './form-element-input/form-element-input.component';
import { DemoNgClassComponent } from './demo-ng-class/demo-ng-class.component';
import { DemoNgStyleComponent } from './demo-ng-style/demo-ng-style.component';
import { Demo2WayBindingInnerComponent } from './demo-2-way-binding-inner/demo-2-way-binding-inner.component';
import { Demo2WayBindingOutterComponent } from './demo-2-way-binding-outter/demo-2-way-binding-outter.component';
import { HighlightDirective } from './highlight.directive';
import { PipesComponent } from './pipes/pipes.component';
import { AnimateComponent } from './animate/animate.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    // MessageComponent,
    FormElementDatePickerComponent,
    FormElementComponent,
    FormElementCheckboxComponent,
    FormElementInputComponent,
    DemoNgClassComponent,
    DemoNgStyleComponent,
    Demo2WayBindingInnerComponent,
    Demo2WayBindingOutterComponent,
    HighlightDirective,
    PipesComponent,
    AnimateComponent,
    FormsComponent,

    CommComponent
  ],
  imports: [

    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    CommRoutingModule,
    CommonModule

  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule  
  ]
})
export class CommModule { }
