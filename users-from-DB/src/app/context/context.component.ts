import { Component } from '@angular/core';

@Component({
  selector: 'app-context',
  template: `
      <router-outlet></router-outlet>
      <app-messages [wrapLines]="true"></app-messages>
  `,
})
export class ContextComponent  {}
