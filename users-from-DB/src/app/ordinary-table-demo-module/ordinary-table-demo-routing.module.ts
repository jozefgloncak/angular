import { NgModule }            from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';


         

import { OrdinaryTableDemoComponent } from './ordinary-table-demo/ordinary-table-demo.component';

const routes: Routes = [
  { path: '', component: OrdinaryTableDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdinaryTableDemoRoutingModule {}