import { NgModule } from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import { ListTableDemoComponent } from './list-table-demo/list-table-demo.component';

const routes: Routes = [
  { path: '', component: ListTableDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTableDemoRoutingModule { }
