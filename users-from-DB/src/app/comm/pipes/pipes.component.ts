import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  birthdate : Date = new Date(1985, 0, 21, 3, 45, 43);
  formats : string[] = [
    "yy/MM/dd"
    ,"yyyy/MM/dd"
    ,"yyyy/MM/dd hh:mm:ss"
    ,"yyyy/M/d"
    ,"h:m:s a z"
    ,"y M"
    ,"y MM"
    ,"y MMM"
    ,"y MMMM"
  ]
  constructor(
  ) { }

  ngOnInit() {
  }

}
