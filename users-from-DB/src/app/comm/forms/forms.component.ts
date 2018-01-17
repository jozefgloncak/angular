import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent{

  isClick = false;
  isContextmenu = false;
  isDoubleclick = false;
  isMousedown = false;
  isMouseup = false;
  isMouseenter = false;
  isMouseleave = false;
  isMousemove = false;
  isKeydown = false;
  isKeyup = false;
  isKeypress = false;

  clicks:number = 0;

  inputValue2 : string;
  input3Value : string;

  constructor(private msgLog:MessageService) { }

  @Input() 
  input1: string;

  assignValue(input: string) {        
      this.inputValue2 = input;
  }

  resetAll() {
    this.isClick = false;
    this.isContextmenu = false;
    this.isDoubleclick = false;
    this.isMousedown = false;
    this.isMouseup = false;
    this.isMouseenter = false;
    this.isMouseleave = false;
    this.isMousemove = false;
    this.isKeydown = false;
    this.isKeyup = false;
    this.isKeypress = false;
  }

  catchEvent(msg : string) {
    this.msgLog.addLevel(msg, 2);
  }

}
