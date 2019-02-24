import React, { Component } from "react";
import "./Chat.css";

class Receivedchats extends Component {
  render() {
    return (
      <div className="message-container flex-l">
        <div className="message-received">{this.props.receivedItem.data}</div>
        <div className="timestamp timestamp-left">
          {this.props.receivedItem.timestamp}
        </div>
      </div>
    );
  }
}

export default Receivedchats;
