import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MessageService } from '../../message.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-form-element-date-picker',
  templateUrl: './form-element-date-picker.component.html',
  styleUrls: ['./form-element-date-picker.component.css']
})
export class FormElementDatePickerComponent implements OnInit {

  startAt: Date = new Date(1985, 3, 21)
  startView: string = "year";

  @Input()
  date = new FormControl(new Date());

  constructor( private msgLog: MessageService) { }

  ngOnInit() {
  }

  handleChange(event: MatDatepickerInputEvent<Date>) {
    this.msgLog.add("event: date change - value" + event.value);
  }

  handleInput(event: MatDatepickerInputEvent<Date>) {
    this.msgLog.add("event: date inputed - value " + event.value);
  }

  handleCloseDatePicker() {
    this.msgLog.add("event: date picker closed" + new Date());
  }

  handleOpenedDatePicker() {
    this.msgLog.add("event: date picker opened " + new Date());
  }

}
