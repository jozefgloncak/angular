import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphRoutingModule } from './graph-routing.module';

import { BarChartComponent } from './bar-chart/bar-chart.component';

import { NvD3Module } from 'ng2-nvd3';

import 'd3';
import 'nvd3';
import { LineChartComponent } from './line-chart/line-chart.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    NvD3Module,
    GraphRoutingModule,
    FormsModule
  ],
  declarations: [BarChartComponent, LineChartComponent]
})
export class GraphModule { }
