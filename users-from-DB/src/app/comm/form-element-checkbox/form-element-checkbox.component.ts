import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../../message.service';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-form-element-checkbox',
  templateUrl: './form-element-checkbox.component.html',
  styleUrls: ['./form-element-checkbox.component.css']
})
export class FormElementCheckboxComponent implements OnInit {

  @Input()
  checked : boolean;

  constructor(private msgLog:MessageService) { }

  ngOnInit() {
    this.msgLog.add("ngOnInit(): FormElementCheckboxComponent");
  }

  classForDummyText: string = "";

  handleCheckBoxChange(event: MatCheckboxChange) {
    // var checkedString :string = event.checked == true ? "checked" : "unchecked";
    // this.msgLog.add("handleCheckBoxChange(): value " + checkedString);
    
    // this.classForDummyText = event.checked == true ? "dummy-text" : "";

    // or 
    this.classForDummyText = this.checked == true ? "dummy-text" : "";
  }

}
