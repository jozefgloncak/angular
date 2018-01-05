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
  showDemoForm : boolean = false;
  showNgClassDemo : boolean = false;
  showNgStyleDemo : boolean = false;
  show2WayBindingDemo : boolean = false;

  hideAllSubComponents() {
    this.showUsersInTable = false;
    this.showUsersInOrdinaryTable = false;
    this.showNewUser = false;
    this.showDemoForm = false;
    this.showNgClassDemo = false;
    this.showNgStyleDemo = false;
    this.show2WayBindingDemo = false;
  }
}