import React, { Component } from "react";
import "./Chat.css";
import Receivedchats from "./Receivedchats";
import Sentchats from "./Sentchats";

class Chatbox extends Component {
  render() {
    return (
      <div className="message-box">
        <div className="message-box-header">
          <div className="messager-avatar" />
          <div className="messager-details">
            <span>{this.props.name}</span>
            <span>{this.props.role}</span>
          </div>
        </div>
        <div className="message-content">
          {this.props.messages.map(message => {
            return (
              <React.Fragment>
                <Receivedchats receivedItem={message.received} />
                <Sentchats sentItem={message.sent} />
              </React.Fragment>
            );
          })}
        </div>
        <div className="chat-enter">
          <textarea
            className="text-box"
            placeholder="Type message here"
            value={this.props.value}
          />
          <div className="highlighted-border" />
        </div>
      </div>
    );
  }
}

export default Chatbox;
