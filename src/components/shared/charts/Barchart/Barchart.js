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
        <div className="chart-container">
          {/* <div className="row"> */}
          <div className={"chart-area-" + this.props.id} />
          {/* </div> */}
        </div>
        {drawChart(data, this.props.option, this.props.id)}
      </React.Fragment>
    );
  }
}

export default Barchart;
