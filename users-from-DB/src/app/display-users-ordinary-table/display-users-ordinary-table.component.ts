import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserDataSource } from '../UserDataSource';
import { User } from '../user';


@Component({
  selector: 'app-display-users-ordinary-table',
  templateUrl: './display-users-ordinary-table.component.html',
  styleUrls: ['./display-users-ordinary-table.component.css']
})
export class DisplayUsersOrdinaryTableComponent implements OnInit {

  users : User[];
  
  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUser().subscribe(users => this.users = users);
  }

}
