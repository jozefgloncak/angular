import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdinaryTableDemoRoutingModule } from './ordinary-table-demo-routing.module';

import { OrdinaryTableDemoComponent } from './ordinary-table-demo/ordinary-table-demo.component';
import { OrdinaryTableRowDemoComponent } from './ordinary-table-row-demo/ordinary-table-row-demo.component';

import { MatSortModule
  ,MatButtonModule
  } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSortModule,
    MatButtonModule,
    OrdinaryTableDemoRoutingModule,
  ],
  declarations: [
    OrdinaryTableDemoComponent,
    OrdinaryTableRowDemoComponent,
  ]
})
export class OrdinaryTableDemoModule { }
