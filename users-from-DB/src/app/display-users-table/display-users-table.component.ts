import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { of } from 'rxjs/observable/of';
import { DataSource } from '@angular/cdk/collections';

import { User } from '../user';
import { UserService } from '../user.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-display-users-table',
  templateUrl: './display-users-table.component.html',
  styleUrls: ['./display-users-table.component.css']
})
export class DisplayUsersTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService, private msgLog: MessageService) {}

  ngAfterViewInit() {
    // this.userService.getUserAll();
    this.userService.getUserAll(this.paginator, this.sort);
    this.msgLog.add("call: ngAfterViewInit()")
  }

  ngOnInit() {
    this.userService.setPaginator(this.paginator);
    this.userService.setSort(this.sort);
    this.msgLog.add("call: ngOnInit()")
  }
}


