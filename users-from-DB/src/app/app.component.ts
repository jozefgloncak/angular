import { Component, Input } from '@angular/core';
import { MessageService } from './message.service';

declare let d3: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSidenav : boolean = true;

  constructor(private msgLog:MessageService) {  }

  invert() {
    this.msgLog.add("showSidenav value: "+this.showSidenav);
  }
}