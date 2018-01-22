import { Component } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  template: `
    <div>
      <nvd3 [options]="options" [data]="data"></nvd3>
    </div>
  `
})
export class LineChartComponent {

    options = {
        chart: {
            type: 'lineChart',
            height: 450,
            margin : {
                top: 20,
                right: 100,
                bottom: 40,
                left: 100
            },
            x: function(d){ return d.x; },
            y: function(d){ return d.y; },
            useInteractiveGuideline: true,
            dispatch: {
                stateChange: function(e){ console.log("stateChange"); },
                changeState: function(e){ console.log("changeState"); },
                tooltipShow: function(e){ console.log("tooltipShow"); },
                tooltipHide: function(e){ console.log("tooltipHide"); }
            },
            xAxis: {
                axisLabel: 'Time (ms)'
            },
            yAxis: {
                axisLabel: 'Voltage (v)',
                    // tickFormat: function(d){
                    //     return d3.format('.02f')(d);
                    // },
                axisLabelDistance: -20
            },
            callback: function(chart){
                console.log("!!! lineChart callback !!!");
            }
        }
    };

    data = this.sinAndCos();


    sinAndCos() : any{
        var sin = [],sin2 = [],
        cos = [];
    
        //Data is represented as an array of {x,y} pairs.
        for (var i = 0; i < 100; i++) {
        sin.push({x: i, y: Math.sin(i/10)});
        sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) *0.25 + 0.5});
        cos.push({x: i, y: .5 * Math.cos(i/10+ 2) + Math.random() / 10});
        
        }
        //Line chart data should be sent as an array of series objects.
        return [
            {
            values: sin,      //values - represents the array of {x,y} data points
            key: 'Sine Wave', //key  - the name of the series.
            color: '#ff7f0e'  //color - optional: choose your own line color.
            },
            {
            values: cos,
            key: 'Cosine Wave',
            color: '#2ca02c'
            },
            {
            values: sin2,
            key: 'Another sine wave',
            color: '#7777ff',
            area: true      //area - set to true if you want this line to turn into a filled area chart.
            }
        ]   ;
    }
}