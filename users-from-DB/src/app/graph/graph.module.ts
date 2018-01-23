import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphRoutingModule } from './graph-routing.module';

import { BarChartComponent } from './bar-chart/bar-chart.component';

import { NvD3Module } from 'ng2-nvd3';

import 'd3';
import 'nvd3';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule
        ,MatSliderModule
       } from '@angular/material';
import { MultiBarChartComponent } from './multi-bar-chart/multi-bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    NvD3Module,
    GraphRoutingModule,
    FormsModule,
    MatCheckboxModule,
    MatSliderModule
  ],
  exports: [
    MatCheckboxModule,
    FormsModule
  ],

  declarations: [BarChartComponent, LineChartComponent, PieChartComponent, MultiBarChartComponent]
})
export class GraphModule { }
