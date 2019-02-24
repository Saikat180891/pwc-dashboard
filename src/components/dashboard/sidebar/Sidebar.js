import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header">PWC DASHBOARD</div>
        <div className="list">
          <Router>
            <React.Fragment>
              <Link to="/" className="list-item">
                Home
              </Link>
              <NavLink
                to="/dashboard"
                activeClassName="list-item-active"
                className="list-item"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/chats"
                activeClassName="list-item-active"
                className="list-item"
              >
                Chats
              </NavLink>
              <NavLink
                to="/settings"
                activeClassName="list-item-active"
                className="list-item"
              >
                Settings
              </NavLink>
            </React.Fragment>
          </Router>
        </div>
      </div>
    );
  }
}

export default Sidebar;
