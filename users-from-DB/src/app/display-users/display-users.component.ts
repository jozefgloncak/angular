import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

  myDataSource = new UserDataSource(this.userService);

  constructor(private userService: UserService) {}

  ngOnInit() {
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userService.getUser();
  }
  disconnect() {}
}
