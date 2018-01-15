import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-ordinary-table-demo',
  templateUrl: './ordinary-table-demo.component.html',
  styleUrls: ['./ordinary-table-demo.component.css']
})
export class OrdinaryTableDemoComponent implements OnInit {

  users : User[];
  
  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.userService.getUserAll();
  }

}
