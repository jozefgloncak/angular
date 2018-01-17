import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialogConfig, MatDialogRef } from '@angular/material';
import { of } from 'rxjs/observable/of';
import { DataSource } from '@angular/cdk/collections';

import { User } from '../../user';
import { UserService } from '../../user.service';
import { MessageService } from '../../message.service';
import { MatDialog } from '@angular/material';
import { ListTableDialogDemoComponent } from '../../new-user-dialog-module/new-user-dialog/new-user-dialog.component';


@Component({
  selector: 'app-material-table-demo',
  templateUrl: './material-table-demo.component.html',
  styleUrls: ['./material-table-demo.component.css']
})
export class MaterialTableDemoComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  newUser : User = new User();


  constructor(private userService: UserService, private msgLog: MessageService, public dialog: MatDialog ) {}

  ngAfterViewInit() {
    // this.userService.getUserAll();
    this.userService.getUserAll(this.paginator, this.sort);
    this.msgLog.addLevel("call: MaterialTableDemoComponent.ngAfterViewInit()", 2)
  }

  ngOnInit() {
    this.userService.setPaginator(this.paginator);
    this.userService.setSort(this.sort);
    this.msgLog.addLevel("call: MaterialTableDemoComponent.ngOnInit()", 2)
  }

  openDialog(): void {
    this.msgLog.addLevel("call MaterialTableDemoComponent.openDialog()", 2);
    let dialogRef : MatDialogRef<ListTableDialogDemoComponent, User>;
    dialogRef = this.dialog.open<ListTableDialogDemoComponent>(ListTableDialogDemoComponent, 
    {
      width: '250px',
      data: { user: this.newUser}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.msgLog.add('The dialog was closed');
      if (result.name != null && result.username != null) {
        this.msgLog.add('new name: '+result.name+ ' and username: '+result.username);
        this.userService.saveUserAll(result);
      }
    });
  }
}


