import React, { Component } from "react";
import * as d3 from "d3";
import "./Barchart.css";
import NVD3Chart from "react-nvd3";

var datum = [{
  key: "Cumulative Return",
  values: [
    {
      "label" : "A" ,
      "value" : -29.765957771107
    } ,
    {
      "label" : "B" ,
      "value" : 0
    } ,
    {
      "label" : "C" ,
      "value" : 32.807804682612
    } ,
    {
      "label" : "D" ,
      "value" : 196.45946739256
    } ,
    {
      "label" : "E" ,
      "value" : 0.19434030906893
    } ,
    {
      "label" : "F" ,
      "value" : -98.079782601442
    } ,
    {
      "label" : "G" ,
      "value" : -13.925743130903
    } ,
    {
      "label" : "H" ,
      "value" : -5.1387322875705
    }
  ]
}
];

let data = [
  {
    name: "saikat",
    height: 34,
    timeStamp: new Date().getTime(),
    color: "red"
  },
  {
    name: "arijit",
    height: 900,
    timeStamp: new Date().getTime(),
    color: "blue"
  },
  {
    name: "arpit",
    height: 29,
    timeStamp: new Date().getTime(),
    color: "green"
  }
];

function drawChart(data, option, id) {
  const y = d3
    .scaleLinear()
    .domain([0, 10])
    .range([0, 5]);

  console.log(y(3));

  const svg = d3
    .selectAll(".chart-area-" + id)
    .append("svg")
    // .attr("width", option.width)
    // .attr("height", option.height)
    // .style("margin", "10px")
    .style("padding", "10px")
    .style("width", "100%")
    .style("height", "100%");

  // const group = svg.append("g");

  const rect = svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("y", 30)
    .attr("x", (d, i) => i * 15)
    .attr("width", 10)
    .attr("height", d => d.height)
    .attr("fill", d => d.color);
}

class Barchart extends Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <NVD3Chart id="barChart" type="discreteBarChart" datum={this.props.data} x="label" y="value" height="300" color={['#C16975']}/>
      </React.Fragment>
    );
  }
}

export default Barchart;
