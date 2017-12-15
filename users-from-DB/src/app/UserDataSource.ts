import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { User } from './user';


export class UserDataSource extends DataSource<any> {
    constructor(private userService: UserService) {
      super();
    }
    connect(): Observable<User[]> {
      return this.userService.getUser();
    }
    disconnect() {}
  }