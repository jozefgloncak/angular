import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  private userUrl = 'http://192.168.56.2:3000/users';

  public users_data : User[];

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  saveUser(user: User):  Observable<User[]> {
    return this.http.post<User[]>(this.userUrl, user, httpOptions)
  }

  getUserAll() {
    this.getUser().subscribe(users => this.users_data = users)
  }

  saveUserAll(user:User) {
    this.saveUser(user).subscribe(hero => this.getUserAll());
  }

}
