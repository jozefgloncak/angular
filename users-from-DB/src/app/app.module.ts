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



@NgModule({
  imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule, HttpClientModule, FormsModule ],
  declarations: [AppComponent, MessageComponent],

  providers: [MessageService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
