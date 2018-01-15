import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-demo-ng-class',
  templateUrl: './demo-ng-class.component.html',
  styleUrls: ['./demo-ng-class.component.css']
})
export class DemoNgClassComponent implements OnInit {

  demoClassSet : {};
  textBold = false;
  textItalic = false;
  textColored = false;
  textUnderline = false;

  constructor(private msgLog:MessageService) { }

  ngOnInit() {
  }

  changeClassSet() {
    this.msgLog.add("changeClassSet()");
    this.textBold = !this.textBold;
    this.textItalic = !this.textItalic;
    this.textColored = !this.textColored;
    this.textUnderline = !this.textUnderline;
    this.prepareClassSet();
    this.msgLog.add("Text is now:");
    this.msgLog.add("- underlined: "+this.textUnderline);
    this.msgLog.add("- bold: "+this.textBold);
    this.msgLog.add("- colored: "+this.textColored);
    this.msgLog.add("- italic: "+this.textItalic);
  }


  /** enable or disable all classes */
  prepareClassSet() {
    this.demoClassSet = {
      'text-bold':this.textBold
      ,'text-underline':this.textUnderline
      ,'text-colored':this.textColored
      ,'text-italic':this.textItalic
    }
  }

}
