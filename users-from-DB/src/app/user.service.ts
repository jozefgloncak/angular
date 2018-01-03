import { Injectable, ViewChild } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  private userUrl = 'http://192.168.56.2:3000/users';

  users_dataSource : MatTableDataSource<User>;
  public users_data : User[];
  paginator: MatPaginator;
  sort: MatSort;

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
    this.saveUser(user).subscribe(hero => this.getUserAll());
  }

  setPaginator(paginator: MatPaginator) {
    this.paginator = paginator;
  }

  setSort(sort: MatSort) {
    this.sort = sort;
  }

}
