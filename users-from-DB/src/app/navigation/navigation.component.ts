import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
  <mat-nav-list>
    <mat-list-item><a matLine routerLink='' routerLinkActive="active">all</a></mat-list-item>
    <mat-list-item><a routerLink='mat-table'>material table</a></mat-list-item>
    <mat-list-item><a routerLink='lst-table'>list table</a></mat-list-item>
    <mat-list-item><a routerLink='graph'>graph</a></mat-list-item>
  </mat-nav-list>
  `,
})
export class NavigationComponent {}
