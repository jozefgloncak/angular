import { Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent{
  icons : string[] = [ 
    "home",
    "build",
    "class",
    "alarm",
    "favorite",
    "face"

  ]
}
