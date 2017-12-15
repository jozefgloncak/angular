import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  showUsers : boolean = false;
  toggleDisplayUsers() {
    this.showUsers = !this.showUsers;
  }
}