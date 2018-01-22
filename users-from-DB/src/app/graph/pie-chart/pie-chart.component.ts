import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnInit {

  options;
  data;
  color : string;

  @Input() labelsOutside:boolean = true; //chart field will be moved in or out of chart pies

  @Input() isDonut:boolean = true; //transform pie -> donut chart

  @Input() growOnHover:boolean = true; //chart will animate (enlarge on hover)
  
  @Input() donutRatio:number; //how big is hole inside donut


  constructor(private msgLog:MessageService) {

  }

  redraw() {
    console.info("redraw call: outside: "+this.labelsOutside, " isDonut: "+this.isDonut);
    let tempOptions : any = {};
    tempOptions.chart = this.options.chart;
    tempOptions.chart.labelsOutside = this.labelsOutside;
    tempOptions.chart.donut = this.isDonut;
    tempOptions.chart.growOnHover = this.growOnHover;
    tempOptions.chart.donutRatio = this.donutRatio;
    this.options = tempOptions;
  }  

  ngOnInit() {
    this.options = {
        chart: {
          type: 'pieChart',
          height: 600,
          x: function(d){return d.key;},
          y: function(d){return d.y;},
          showLabels: true,
          duration: 500,
          labelThreshold: 0.01,
          labelSunbeamLayout: true,
          legend: {
            margin: {
              top: 5,
              right: 35,
              bottom: 5,
              left: 0
            }
          },
          // color:["#F00000", "#E00000", "#D00000", "#C00000", "#B00000", "#A00000", "#900000"], //specify colors which will be used for data in order
          // donut:true,  
          labelsOutside:this.labelsOutside, //labels of donut chart will be from outside of graph
          donutRatio:0.75, //value from interval <0,1> - how distance of radius is used for inner white circle: 1 -everything, 0-nothing (no inner circle)
          // growOnHover:true, //chart
        }
    }   
    this.redraw() 

    this.data = [
        {
          key: "One",
          y: 5
        },
        {
          key: "Two",
          y: 2
        },
        {
          key: "Three",
          y: 9
        },
        {
          key: "Four",
          y: 7
        },
        {
          key: "Five",
          y: 4
        },
        {
          key: "Six",
          y: 3
        },
        {
          key: "Seven",
          y: .5
        }
    ];
  }      

}
