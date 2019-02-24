import React, { Component } from "react";
import * as d3 from "d3";
import "./Barchart.css";

// let formatDate = date => {
//   let month = date.getMonth() + 1;
//   return month + "-" + date.getDate() + "-" + date.getFullYear();
// };

// console.log(d3.timeFormat("%d-%m-%y")(new Date()));

// var context = {
//   getColor: function(i) {
//     var colors = 0;
//   }
// };
let data = [
  {
    name: "saikat",
    height: 34,
    timeStamp: new Date().getTime(),
    color: "red"
  },
  {
    name: "arijit",
    height: 67,
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
  var svg = d3
    .selectAll(".chart-area-" + id)
    .append("svg")
    .attr("width", option.width)
    .attr("height", option.height);

  var group = svg.append("g");

  var y = d3
    .scaleLinear()
    .domain([0, 100])
    .range([0, 200]);

  var rect = group
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("y", 30)
    .attr("x", function(d, i) {
      return i * 15;
    })
    .attr("width", 10)
    .attr("height", function(d) {
      return d.height;
    })
    .attr("fill", function(d) {
      return d.color;
    });
}

class Barchart extends Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className={"chart-area-" + this.props.id} />
          </div>
        </div>
        {drawChart(data, this.props.option, this.props.id)}
      </React.Fragment>
    );
  }
}

export default Barchart;
