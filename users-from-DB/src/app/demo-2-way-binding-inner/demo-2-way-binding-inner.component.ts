import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-demo-2-way-binding-inner',
  templateUrl: './demo-2-way-binding-inner.component.html',
  styleUrls: ['./demo-2-way-binding-inner.component.css']
})
export class Demo2WayBindingInnerComponent {

  constructor() { }

  @Input()  size: number | string = 10;
  @Output() sizeChange = new EventEmitter<number>();
  @Output() event2 = new EventEmitter<string>();

 
  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
 
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
    this.event2.emit("dummy value");
  }

}