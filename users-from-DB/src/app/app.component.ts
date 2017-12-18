import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  showUsersInTable : boolean = false;
  showUsersInOrdinaryTable : boolean = false;
  showNewUser : boolean = false;

  hideAllSubComponents() {
    this.showUsersInTable = false;
    this.showUsersInOrdinaryTable = false;
    this.showNewUser = false;
  }
}