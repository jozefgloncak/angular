import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {

  options;
  data;
  color : string;

  redraw() {
    console.info("redraw - start");

    let newData : any[] = [];
    newData[0] = { key:"", "values": []};

    newData[0].key = this.data[0].key;

    for (let element of this.data[0].values) {
      element.color = this.color;
      newData[0].values.push(element);
    }

    this.data = newData;
    console.info("redraw - end");
  }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,  //display values above bar charts
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -100
        },
        color: function(d) {return d.color;},
        // showXAxis:false, //hide X axis
        // showYAxis:false, //hide y axis
        // staggerLabels: true, //labels at x axis would be at various height so overlapping is less propable

      }
    }
    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "A" ,
            "value" : -29.765957771107
            ,"color" : this.color
          } ,
          {
            "label" : "B" ,
            "value" : 10
            ,"color" : this.color
          } ,
          {
            "label" : "C" ,
            "value" : 32.807804682612
            ,"color" : this.color
          } ,
          {
            "label" : "D" ,
            "value" : 19.45946739256
            ,"color" : this.color
          } ,
          {
            "label" : "E" ,
            "value" : 0.19434030906893
            ,"color" : this.color
          } ,
          {
            "label" : "F" ,
            "value" : -9.079782601442
            ,"color" : this.color
          },
          {
            "label" : "G" ,
            "value" : -13.925743130903
            ,"color" : this.color
          } ,
          {
            "label" : "H" ,
            "value" : -5.1387322875705
            ,"color" : this.color
          },
          {
            "label" : "I" ,
            "value" : 25
            ,"color" : this.color
          },
          {
            "label" : "J" ,
            "value" : 40
            ,"color" : this.color
          },
        ]
      }
    ];
  }

}
