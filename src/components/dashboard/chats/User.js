import React, { Component } from "react";
import "./Chat.css";

class User extends Component {
  render() {
    const userWhenActive = {
      backgroundColor:
        this.props.selected === this.props.id ? "#262A2D" : "#2F3437"
    };
    return (
      <div
        id={this.props.id}
        className="user-details"
        onClick={this.props.click}
        style={userWhenActive}
      >
        <div className="user-profile-image" />
        <div className="username">
          <span>{this.props.name}</span>
          <span>{this.props.message}</span>
        </div>
        <div className="time-since">{this.props.time}</div>
      </div>
    );
  }
}

export default User;
