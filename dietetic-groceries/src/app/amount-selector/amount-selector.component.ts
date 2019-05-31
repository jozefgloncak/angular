import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amount-selector',
  templateUrl: './amount-selector.component.html',
  styleUrls: ['./amount-selector.component.css']
})
export class AmountSelectorComponent implements OnInit {

  amount : number = 0;

  constructor() { }

  ngOnInit() {
  }

  changeAmount(delta: number) {
    if (this.amount > 0 || (this.amount == 0 && delta > 0)) {
      this.amount = this.amount + delta;
    }
  }

}
