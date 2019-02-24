import React, { Component } from "react";
import "./Chat.css";

class Sentchats extends Component {
  render() {
    return (
      <div className="message-container flex-r">
        <div className="message-sent">{this.props.sentItem.data}</div>
        <div className="timestamp timestamp-right">
          {this.props.sentItem.timestamp}
        </div>
      </div>
    );
  }
}

export default Sentchats;
