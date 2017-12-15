import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatHeaderCell } from '@angular/material/table';
import { MatCell } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayUsersComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatTableModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
