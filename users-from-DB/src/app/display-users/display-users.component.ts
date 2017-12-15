import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

  myDataSource  = new MatTableDataSource();

  constructor() {
    this.myDataSource.data = [
      {name:"Jozef",surname:"Gloncak"}
      ,{name:"Martin",surname:"Solansky"}
    ]
  }

  ngOnInit() {
  }

}