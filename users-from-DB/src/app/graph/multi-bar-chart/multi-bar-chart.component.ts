import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'multi-bar-chart-chart',
  templateUrl: './multi-bar-chart.component.html'
})
export class MultiBarChartComponent implements OnInit {

  options;
  data;

  @Input() customColor: boolean = false;

  redraw() {
    console.info("redraw() start ")
    let chartColor : string[];
    if (this.customColor) {
      chartColor = ["#FF0000","#00FF00","0000FF"];
      console.info("redraw() customColor==true ")
    } else {
      chartColor = null;
      console.info("redraw() customColor!=true ")
    }
    let tempOptions : any = {};
    tempOptions.chart = this.options.chart;
    tempOptions.chart.color = chartColor;
    tempOptions.chart.showXAxis = !tempOptions.chart.showXAxis,
    this.options = tempOptions;
    console.info("redraw() color "+this.options.chart.color);
    console.info("redraw() showXAxis "+this.options.chart.showXAxis);
    console.info("redraw() options "+this.options);
    console.info("redraw() end")
  }


  ngOnInit() {
    this.options = {
      chart: {
        type: 'multiBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 45,
          left: 45
        },
        clipEdge: true,
        //staggerLabels: true,
        duration: 500,
        stacked: true,
        xAxis: {
          axisLabel: 'Persons',
          showMaxMin: false,
        },
        yAxis: {
          axisLabel: 'Times',
          axisLabelDistance: -20,
        },
        color:null,
        showXAxis:false,
        // barColor: ["#FF0000","#00FF00","#0000FF"],
        // color:["#FF0000","#00FF00","0000FF"],
      }
  }
    // this.data = this.generateDataMultiBar();
    this.data = 
    [
      {
        key: "Race1",
        nonStackable: false,
        values: [
          {x:1, y:6},
          {x:2, y:10},
          {x:3, y:15},
          {x:4, y:9},
          {x:5, y:9},
          {x:6, y:4},
          {x:7, y:18},
          {x:8, y:16},
        ]
      },
      {
        key: "Race2",
        nonStackable: false,
        values: [
          {x:1, y:3},
          {x:2, y:3},
          {x:3, y:4},
          {x:4, y:2},
          {x:5, y:4},
          {x:6, y:4},
          {x:7, y:7},
          {x:8, y:9},
        ]
      },
      {
        key: "Race3",
        nonStackable: false,
        values: [
          {x:1, y:54},
          {x:2, y:73},
          {x:3, y:44},
          {x:4, y:82},
          {x:5, y:64},
          {x:6, y:54},
          {x:7, y:67},
          {x:8, y:89},
        ]
      },
    ];
  
  }

}
