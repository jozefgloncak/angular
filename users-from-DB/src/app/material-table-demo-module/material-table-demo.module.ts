import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { MaterialTableDemoRoutingModule } from './material-table-demo-routing.module';
import { MaterialTableDemoComponent } from './material-table-demo/material-table-demo.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material';



@NgModule({
  imports: [
    // CommonModule,
    MaterialTableDemoRoutingModule,
    MatPaginatorModule,
    MatSortModule,

    MatTableModule
  ],
  declarations: [
    MaterialTableDemoComponent
  ]
})
export class MaterialTableDemoModule { }
