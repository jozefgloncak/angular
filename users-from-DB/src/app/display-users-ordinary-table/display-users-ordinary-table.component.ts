import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-display-users-ordinary-table',
  templateUrl: './display-users-ordinary-table.component.html',
  styleUrls: ['./display-users-ordinary-table.component.css']
})
export class DisplayUsersOrdinaryTableComponent implements OnInit {

  users : User[];
  
  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.userService.getUserAll();
  }

}
