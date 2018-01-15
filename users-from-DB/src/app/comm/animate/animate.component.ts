import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-animate',
  // templateUrl: './animate.component.html',
  template:`
    <div>
      <input [@buttonAnim]="init" type="button" value="animation">
    </div>
`,
  styleUrls: ['./animate.component.css'],
  animations: [
    trigger('buttonAnim', [
      state('init', style({        
        width: 200, height: 200

      })),
      transition('void => *', animate("5000ms", keyframes([
        style({width: 100, offset: 0.25}),
        style({height: 100, offset: 0.5}),
        style({width: 200, offset: 0.75}),
        style({height: 200, offset: 1})
        ])
      ))
    ])
  ]
})
export class AnimateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
