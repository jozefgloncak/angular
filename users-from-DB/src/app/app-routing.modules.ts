import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MaterialTableDemoComponent } from './material-table-demo-module/material-table-demo/material-table-demo.component';
// import { MaterialTableDemoModule } from './material-table-demo-module/material-table-demo.module';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: 'mat-table', loadChildren: 'app/material-table-demo-module/material-table-demo.module#MaterialTableDemoModule' },
    { path: 'ord-table', loadChildren: 'app/ordinary-table-demo-module/ordinary-table-demo.module#OrdinaryTableDemoModule' },
    { path: '', redirectTo: 'default', pathMatch: 'full' },
    { path: 'default', loadChildren: 'app/comm/comm.module#CommModule' },
  ];

  @NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
  
  })
  export class AppRoutingModule { }