import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
  <mat-nav-list>
    <mat-list-item><a matLine routerLink='' routerLinkActive="active">all</a></mat-list-item>
    <mat-list-item><a routerLink='table'>table</a></mat-list-item>
    <mat-list-item>
      <mat-list-item><a routerLink='table/mat-table'>material table</a></mat-list-item>
    </mat-list-item>
    <mat-list-item>
      <mat-list-item><a routerLink='table/lst-table'>list table</a></mat-list-item>
    </mat-list-item>
    <mat-list-item>chart</mat-list-item>
    <mat-list-item>
      <mat-list-item><a routerLink='graph/bar'>bar</a></mat-list-item>      
    </mat-list-item>
    <mat-list-item>
      <mat-list-item><a routerLink='graph/line'>line</a></mat-list-item>
    </mat-list-item>
    <mat-list-item>
      <mat-list-item><a routerLink='graph/pie'>pie</a></mat-list-item>
    </mat-list-item>
    <mat-list-item>
      <mat-list-item><a routerLink='graph/multi-bar'>multi-bar</a></mat-list-item>
    </mat-list-item>
    </mat-nav-list>
  `,
})
export class NavigationComponent {}
