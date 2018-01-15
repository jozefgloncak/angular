import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-demo-ng-style',
  templateUrl: './demo-ng-style.component.html',
  styleUrls: ['./demo-ng-style.component.css']
})
export class DemoNgStyleComponent implements OnInit {

  demoStylesSet : {};

  values:string[][] = [['italic','normal'],['bold','normal'],['24px','12px']]
  currentStyle : number= 1;

  fontStyle : string;
  fontWeight :string;
  fontSize :string;

  constructor(private msgLog: MessageService) { }

  ngOnInit() {
    this.setStyles(this.currentStyle);
  }

  setStyles(idx: number) {
    this.fontStyle = this.values[0][idx];
    this.fontWeight = this.values[1][idx];
    this.fontSize = this.values[2][idx];
  }

  changeStylesSet() {
    this.msgLog.add("changeStylesSet()");

    this.currentStyle = (this.currentStyle + 1) % 2;
    this.setStyles(this.currentStyle)
    this.prepareStylesSet();
    this.msgLog.add("Text is now styled:");
    this.msgLog.add("- style: "+this.fontStyle);
    this.msgLog.add("- weight: "+this.fontWeight);
    this.msgLog.add("- size: "+this.fontSize);
  }

  /** change all styles at once */
  prepareStylesSet() {
    this.demoStylesSet = {
      'font-style':this.fontStyle
      ,'font-weight':this.fontWeight
      ,'font-size':this.fontSize
    }
  }

}
