import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs/observable/of';
import { DataSource } from '@angular/cdk/collections';

import { User } from '../user';
import { UserService } from '../user.service';
import { UserDataSource } from '../UserDataSource';


@Component({
  selector: 'app-display-users-table',
  templateUrl: './display-users-table.component.html',
  styleUrls: ['./display-users-table.component.css']
})
export class DisplayUsersTableComponent implements OnInit {

  myDataSource : UserDataSource;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.myDataSource = new UserDataSource(this.userService);
  }
}


