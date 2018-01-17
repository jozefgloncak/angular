import { NgModule }            from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';
import { CommComponent } from './comm/comm.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CommComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommRoutingModule {}