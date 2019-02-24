import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    console.log(this.props.height, this.props.width);

    let cardStyle = {
      height: this.props.height,
      width: this.props.width
    };
    return (
      <div className="card-container" style={cardStyle}>
        <div className="card-header">
          <button className="waves-effect waves-light btn" title="Analyze">
            Analyze
          </button>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
