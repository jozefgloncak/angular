import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
    { path: 'mat-table', loadChildren: 'app/material-table-demo-module/material-table-demo.module#MaterialTableDemoModule' },
    { path: 'ord-table', loadChildren: 'app/ordinary-table-demo-module/ordinary-table-demo.module#OrdinaryTableDemoModule' },
    { path: 'lst-table', loadChildren: 'app/list-table-demo-module/list-table-demo.module#ListTableDemoModule' },
    { path: 'graph', loadChildren: 'app/graph/graph.module#GraphModule' },
    { path: '', redirectTo: 'default', pathMatch: 'full' },
    { path: 'default', loadChildren: 'app/comm/comm.module#CommModule' },
  ];

  @NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
  
  })
  export class AppRoutingModule { }