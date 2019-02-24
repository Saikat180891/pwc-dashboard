import React, { Component } from "react";
import "./Chat.css";
import "./User";
import User from "./User";
import Chatbox from "./Chatbox";

let logo = "../../../logo.svg";

class Chat extends Component {
  state = {
    users: [
      {
        name: "Saikat Paul",
        message: "Lorem Ipsum is good",
        time: "3 min ago",
        role: "Software Engineer",
        messages: [
          {
            received: { data: "Hey", timestamp: "3:23pm" },
            sent: { data: "Hi", timestamp: "4:43pm" }
          }
        ]
      },
      {
        name: "Arijit Sarkar",
        message: "Lorem Ipsum is bad",
        time: "5 min ago",
        role: "Senior Software Engineer",
        messages: [
          {
            received: { data: "Hey", timestamp: "3:23pm" },
            sent: { data: "Hi", timestamp: "4:43pm" }
          }
        ]
      },
      {
        name: "Arpit Malhotra",
        message: "Lorem Ipsum is bad",
        time: "15 min ago",
        role: "Technical Leader",
        messages: [
          {
            received: { data: "Hey", timestamp: "3:23pm" },
            sent: { data: "Hi", timestamp: "4:43pm" }
          }
        ]
      }
    ],
    currentUser: {}
  };

  selectedUserIndex = -1;

  selectCurrentUserHandler = i => {
    this.setState({ currentUser: this.state.users[i] });
    this.selectedUserIndex = i;
  };

  sendMessage = event => {
    console.log("event");
  };

  render() {
    let chatbox = null;

    if (Object.entries(this.state.currentUser).length > 0) {
      chatbox = (
        <Chatbox
          name={this.state.currentUser.name}
          message={this.state.currentUser.message}
          time={this.state.currentUser.time}
          role={this.state.currentUser.role}
          messages={this.state.currentUser.messages}
          value={this.sendMessage}
        />
      );
    }

    return (
      <div className="main">
        <div className="heading">Chat Room</div>
        <div className="chat-box-container">
          <div className="chat-users">
            <div className="chat-user-search">
              <input
                type="search"
                className="search-box"
                placeholder="Search message or name"
              />
              <div className="search-icon">
                <i className="material-icons">search</i>
              </div>
            </div>

            <div className="chat-user-container">
              {this.state.users.map((user, i) => {
                return (
                  <User
                    id={i}
                    name={user.name}
                    message={user.message}
                    time={user.time}
                    selected={this.selectedUserIndex}
                    messages={user.messages}
                    click={this.selectCurrentUserHandler.bind(this, i)}
                  />
                );
              })}
            </div>
          </div>
          <React.Fragment>{chatbox}</React.Fragment>
        </div>
      </div>
    );
  }
}

export default Chat;
