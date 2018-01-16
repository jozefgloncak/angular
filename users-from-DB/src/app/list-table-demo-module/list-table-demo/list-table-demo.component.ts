import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../../message.service';
import { UserService } from '../../user.service';
import { User } from '../../user';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ListTableDialogDemoComponent } from '../../list-table-dialog-demo/list-table-dialog-demo.component';

@Component({
  selector: 'app-list-table-demo',
  templateUrl: './list-table-demo.component.html',
  styleUrls: ['./list-table-demo.component.css']
})
export class ListTableDemoComponent implements OnInit {

  @Input()
  items : User[];
  newUser : User = new User();
  
  constructor(private userService:UserService, private msgLog:MessageService, public dialog: MatDialog) { 

  }

  ngOnInit() {
    this.userService.getUser().subscribe(users => {this.items = users});
  }

  openDialog(): void {
    let dialogRef : MatDialogRef<ListTableDialogDemoComponent, User>;
    dialogRef = this.dialog.open(ListTableDialogDemoComponent, {
      width: '250px',
      data: { user: this.newUser}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.msgLog.add('The dialog was closed');
      if (result.name != null && result.username != null) {
        this.userService.saveUser(result).subscribe(user => {this.items.push(user)});
      }
    });
  }
}
