import { NgModule }            from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';
import { CommComponent } from './comm/comm.component';

const routes: Routes = [
  // { path: '', redirectTo: 'table', pathMatch: 'full'},
  { path: '', pathMatch: 'full', component: CommComponent},
  // { path: 'table',    component: DisplayUsersTableComponent}
  // { path: 'table',    component: DisplayUsersTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommRoutingModule {}