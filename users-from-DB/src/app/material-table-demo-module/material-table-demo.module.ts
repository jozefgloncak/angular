import { NgModule } from '@angular/core';

import { MaterialTableDemoRoutingModule } from './material-table-demo-routing.module';
import { MaterialTableDemoComponent } from './material-table-demo/material-table-demo.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule
  ,MatButtonModule
  } from '@angular/material';




@NgModule({
  imports: [
    MaterialTableDemoRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatTableModule,
  ],
  declarations: [
    MaterialTableDemoComponent
  ],
})
export class MaterialTableDemoModule { }
