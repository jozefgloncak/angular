import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-table-row',
  templateUrl: './display-table-row.component.html',
  styleUrls: ['./display-table-row.component.css']
})

export class DisplayTableRowComponent implements OnInit {

  @Input() usersInRow : User[];

  constructor() { }

  ngOnInit() {
  }

}
