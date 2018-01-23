import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MultiBarChartComponent } from './multi-bar-chart/multi-bar-chart.component';

const routes: Routes = [
  { path: 'bar', component: BarChartComponent},
  { path: 'line', component: LineChartComponent},
  { path: 'pie', component: PieChartComponent},
  { path: 'multi-bar', component: MultiBarChartComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphRoutingModule { }
