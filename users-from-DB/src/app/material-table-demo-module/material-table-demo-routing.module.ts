import { NgModule }            from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import { MaterialTableDemoComponent } from './material-table-demo/material-table-demo.component';

const routes: Routes = [
  { path: '', component: MaterialTableDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialTableDemoRoutingModule {}