import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../../user';

@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.css']
})
export class ListTableDialogDemoComponent {

  constructor(
    public dialogRef: MatDialogRef<ListTableDialogDemoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
