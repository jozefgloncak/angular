import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-ordinary-table-row-demo',
  templateUrl: './ordinary-table-row-demo.component.html',
  styleUrls: ['./ordinary-table-row-demo.component.css']
})

export class OrdinaryTableRowDemoComponent implements OnInit {

  @Input() usersInRow : User[];

  constructor() { }

  ngOnInit() {
  }

}
