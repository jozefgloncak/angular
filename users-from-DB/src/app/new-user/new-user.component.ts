import { Component, OnInit, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';
import { User } from '../user';
import {UserService} from '../user.service';
import {FormControl} from '@angular/forms';
import { MessageService } from '../message.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user: User = new User();
  bind_name:string;
  bind_username:string

  startAt: Date = new Date(1985, 3, 21)
  startView: string = "year";

  @Input()
  date = new FormControl(new Date());

  @Input()
  name: string;

  @Input()
  username: string;

  constructor(private userService: UserService, private msgLog: MessageService) { }

  ngOnInit() {
    this.msgLog.add("init of new user dialog");
  }

  save_user() {
    if (this.name != "" && this.username != "") {
      this.user.name = this.name;
      this.user.username = this.username
    }
    this.userService.saveUserAll(this.user);
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
