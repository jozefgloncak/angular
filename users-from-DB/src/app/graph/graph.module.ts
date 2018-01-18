import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphRoutingModule } from './graph-routing.module';

import { BarChartComponent } from './bar-chart/bar-chart.component';

import { NvD3Module } from 'ng2-nvd3';

import 'd3';
import 'nvd3';


@NgModule({
  imports: [
    CommonModule,
    NvD3Module,
    GraphRoutingModule
  ],
  declarations: [BarChartComponent]
})
export class GraphModule { }
