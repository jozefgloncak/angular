import { Component, OnInit, Input } from '@angular/core';
// import { FormControl } from '@angular/forms';
import {MatInput} from '@angular/material/input';

import { FloatLabelType } from '@angular/material';

@Component({
  selector: 'app-form-element-input',
  templateUrl: './form-element-input.component.html',
  styleUrls: ['./form-element-input.component.css']
})
export class FormElementInputComponent implements OnInit {

  @Input()
  inputValue:string;

  matInput : MatInput;


  floatLabelType : FloatLabelType = "always";

  constructor() { }

  ngOnInit() {
  }

}
