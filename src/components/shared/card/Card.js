import React, { Component } from "react";
import "./Card.css";
import { Button, Card, DropdownButton, Dropdown } from 'react-bootstrap';
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

class CardCustom extends Component {
  state = {
    data: [],
    selectedOption: 'Select'
  }

  optionSelected(e){
    console.log(e)
    this.setState({selectedOption:e});
  }
  
  render() {
    let dropDownOptions = [];
    if(this.props.data){
      dropDownOptions = this.props.data.map((ele, i)=>{
        return (
          <Dropdown.Item href="#/action-1" onSelect={this.props.optionSelected.bind(this, ele)}>{ele.id}</Dropdown.Item>
        )
      });
    }

    let cardStyle = {
      height: this.props.height,
      width: this.props.width
    };

    return (
      <Card>
        <Card.Body>
          <div className="card-header-custom">
            <Card.Title>{this.props.header}</Card.Title>
            <div style={{display:this.props.noselect?"none":"block"}}>
              <DropdownButton alignRight id="dropdown-basic-button" title={this.props.todisplay}>
                {dropDownOptions}
              </DropdownButton>
            </div>
          </div>
          {this.props.children}
        </Card.Body>
      </Card>
    );
  }
}

export default CardCustom;
