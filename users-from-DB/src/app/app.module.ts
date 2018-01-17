import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MessageService } from './message.service';
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.modules';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';
import { MatListModule
  , MatDialogModule
  , MatSidenavModule
  , MatRadioModule
  , MatCheckboxModule
  , MatTabsModule
  , MatSlideToggleModule
 } from '@angular/material';
import { ListTableDialogDemoComponent } from './new-user-dialog-module/new-user-dialog/new-user-dialog.component';
import { NewUserDialogModule } from './new-user-dialog-module/new-user-dialog.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ContextComponent } from './context/context.component';



@NgModule({
  imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule, HttpClientModule, FormsModule
  , MatListModule
  , MatDialogModule
  , NewUserDialogModule
  , MatCheckboxModule
  , MatSidenavModule
  , MatTabsModule
  , MatSlideToggleModule
 ],
  declarations: [AppComponent, MessageComponent, ListTableDialogDemoComponent, NavigationComponent, ContextComponent],

  providers: [MessageService, UserService],
  bootstrap: [AppComponent],
  entryComponents:[ListTableDialogDemoComponent]
})
export class AppModule { }
