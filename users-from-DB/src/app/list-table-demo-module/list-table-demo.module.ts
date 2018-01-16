import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatIconModule, MatFormFieldModule, MatButtonModule
 } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { ListTableDemoComponent } from './list-table-demo/list-table-demo.component';
import { ListTableDemoRoutingModule } from './list-table-demo-routing.module'
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    ListTableDemoRoutingModule,
    FormsModule
  ],
  declarations: [ListTableDemoComponent],
})
export class ListTableDemoModule { }
