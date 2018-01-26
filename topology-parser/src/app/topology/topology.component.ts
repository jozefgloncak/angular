import { Component } from '@angular/core';
import { JsonParserService } from '../json-parser.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { NodeModel } from '../shared/models/node-model';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.css']
})
export class TopologyComponent {
  
  nodeToNeighbours : Map<string,Set<string>>;
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

  chooseFile(event) {
    let file: File = this.jsonParser.selectFile(event);
    this.jsonParser.readFile(file);
  }

  analyzeContent() {
    this.nodeToNeighbours = this.jsonParser.analyzeContent();    
    this.nodeToNeighbours.forEach((value : Set<string>, key, map) => {
      console.log(key);
      value.forEach(element => {
        console.log(" ",element);
      });
    });
  }

}
