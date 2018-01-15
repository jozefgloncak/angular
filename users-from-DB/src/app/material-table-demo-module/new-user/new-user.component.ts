import { Component, OnInit, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';
import { User } from '../../user';
import {UserService} from '../../user.service';
import { MessageService } from '../../message.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user: User = new User();
  bind_name:string;
  bind_username:string

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

  
}
