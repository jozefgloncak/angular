import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-demo-2-way-binding-outter',
  templateUrl: './demo-2-way-binding-outter.component.html',
  styleUrls: ['./demo-2-way-binding-outter.component.css']
})
export class Demo2WayBindingOutterComponent{

  initialSize : number = 9;

  constructor(private msgLog: MessageService) { }

  sizeChangedWithLog(num:number) {
    this.msgLog.add("sizeChangedWithLog() with value "+num);
    this.initialSize = num;
  }

  handleEvent2(str: string) {
    this.msgLog.add("handleEvent2(): value >"+ str + "<");
  }



}
