import { Injectable, ViewChild } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MessageService } from './message.service';
import {Sort} from '@angular/material'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  private userUrl = 'http://192.168.56.2:3000/users';

  users_dataSource : MatTableDataSource<User>;
  public users_data : User[];
  public sorted_users_data : User[];
  paginator: MatPaginator;
  sort: MatSort;
  lastOrdinarySort: Sort;

  constructor(private http: HttpClient, private msgLog:MessageService) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  saveUser(user: User):  Observable<User[]> {
    return this.http.post<User[]>(this.userUrl, user, httpOptions)
  }

  getUserAll(paginator?: MatPaginator, sort?:MatSort) {
    this.getUser().subscribe(users => {
      this.users_data = users;
      this.users_dataSource = new MatTableDataSource();
      this.users_dataSource.data = this.users_data;
      this.sortData(this.lastOrdinarySort);
      if (paginator) {
        this.msgLog.add("call getUserAll() with parameter paginator")
        this.users_dataSource.paginator = paginator;
      } else {
        this.msgLog.add("call getUserAll() with default paginator")
        this.users_dataSource.paginator = this.paginator;
      }
      if (sort) {
        this.msgLog.add("call getUserAll() with parameter sort")
        this.users_dataSource.sort = sort;
      } else {
        this.msgLog.add("call getUserAll() with default sort")
        this.users_dataSource.sort = this.sort;
      }
    });
  }

  saveUserAll(user:User) {
    this.saveUser(user).subscribe(user => this.getUserAll());
  }

  setPaginator(paginator: MatPaginator) {
    this.paginator = paginator;
  }

  setSort(sort: MatSort) {
    this.sort = sort;
  }


  public sortData(sort?: Sort) {
    this.lastOrdinarySort = sort;
    const data = this.users_data.slice();
    if (!sort) {
      this.sorted_users_data = data;
      return;
    }
    if (!sort.active || sort.direction == '') {
      this.sorted_users_data = data;
      return;
    }
    this.msgLog.add("sortData() by"+sort.active);
    this.sorted_users_data = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'id': return this.compare(a.id, b.id, isAsc);
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'username': return this.compare(a.username, b.username, isAsc);
        default: return 0;
      }
    });
  }

  compare(a, b, isAsc): number {
    // this.msgLog.add("compare() "+a+" "+b);
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}