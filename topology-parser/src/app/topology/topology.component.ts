import { Component } from '@angular/core';
import { JsonParserService } from '../json-parser.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Node } from '../Node';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.css']
})
export class TopologyComponent {
  
  nodes : Node[];
  displayCtx:boolean;
  fileContent:string;

  dialogClosed:boolean;
  
  constructor(private jsonParser:JsonParserService, public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef : MatDialogRef<DialogComponent, string>;
    this.dialogClosed = false;
    dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      // data: { this.dialogClose}
    });

    dialogRef.afterClosed().subscribe(data => {
      this.dialogClosed = true;
    });
  }

  analyzeContent() {
    this.jsonParser.analyzeContent();    
    this.nodes = this.jsonParser.nodes;
    // console.log(this.nodes);
  }

}
