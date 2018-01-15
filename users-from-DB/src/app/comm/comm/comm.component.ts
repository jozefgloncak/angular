import { Component } from '@angular/core';

@Component({
  selector: 'app-comm',
  templateUrl: './comm.component.html',
  styleUrls: ['./comm.component.css']
})
export class CommComponent {

  constructor() { }

  
  showUsersInTable : boolean = false;
  showUsersInOrdinaryTable : boolean = false;
  showNewUser : boolean = false;
  showDemoForm : boolean = false;
  showNgClassDemo : boolean = false;
  showNgStyleDemo : boolean = false;
  show2WayBindingDemo : boolean = false;
  showHighlightDirectiveDemo : boolean = false;
  showPipesDemo : boolean = false;
  showAnimateDemo : boolean = false;
  showFormsDemo : boolean = false;

  hideAllSubComponents() {
    this.showUsersInTable = false;
    this.showUsersInOrdinaryTable = false;
    this.showNewUser = false;
    this.showDemoForm = false;
    this.showNgClassDemo = false;
    this.showNgStyleDemo = false;
    this.show2WayBindingDemo = false;
    this.showHighlightDirectiveDemo = false;
    this.showPipesDemo = false;
    this.showAnimateDemo = false;
    this.showFormsDemo = false;
  }
}