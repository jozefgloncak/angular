import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../user';

@Component({
  selector: 'app-list-table-dialog-demo',
  templateUrl: './list-table-dialog-demo.component.html',
  styleUrls: ['./list-table-dialog-demo.component.css']
})
export class ListTableDialogDemoComponent {

  constructor(
    public dialogRef: MatDialogRef<ListTableDialogDemoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
