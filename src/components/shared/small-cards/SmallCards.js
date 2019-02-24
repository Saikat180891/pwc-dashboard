import React, { Component } from "react";
import "./SmallCards.css";

class SmallCards extends Component {
  render() {
    return (
      <div className="small-cards">
        <div className="left-panel">
          <div className="card-name">Total</div>
          <div className="total">
            <div className="total-top">244K</div>
            <div className="total-bottom">12.43%</div>
          </div>
        </div>
        <div className="right-panel">{this.props.children}</div>
      </div>
    );
  }
}

export default SmallCards;
