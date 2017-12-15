import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {

  constructor() { }
  users : User[] = [
    new User("Jozef","Gloncak")
  ]

  getUser(): Observable<User[]> {
    return of(this.users)
  }

}
