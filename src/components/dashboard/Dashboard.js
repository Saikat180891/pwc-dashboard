import React, { Component } from "react";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";
import logo from "../../pwc_Logo.svg";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Chat from "./chats/Chat";
import "./Dashboard.css";

let showModal = {
  // visibility: "visible"
  opacity: 1,
  transform: "scale(1)"
};

let hideModal = {
  // visibility: "hidden"
  opacity: 0,
  transform: "scale(0)"
};

class Dashboard extends Component {
  toggleSidebar = () => {
    console.log("hello");
  };

  state = {
    links: [1, 2, 3, 4],
    toggleModal: false
  };

  closeModal() {
    this.setState({ toggleModal: false });
  }

  render() {
    return (
      <div className="container">
        <div className="Navbar">
          <Navbar toggleSidebar={this.toggleSidebar} links={this.state.links} />
        </div>
        <div className="Main">
          <Router>
            <React.Fragment>
              <div className="Sidebar">
                <div className="brand-logo">
                  <img src={logo} alt="pwc" />
                </div>
                <Link to="/" className="list-item">
                  <span className="list-item-icon">
                    <i className="material-icons">home</i>
                  </span>
                  <span className="list-item-title">Home</span>
                </Link>
                <NavLink
                  to="/dashboard"
                  activeClassName="list-item-active"
                  className="list-item"
                >
                  <span className="list-item-icon">
                    <i className="material-icons">dashboard</i>
                  </span>
                  <span className="list-item-title">Dashboard</span>
                </NavLink>
                <NavLink
                  to="/chats"
                  activeClassName="list-item-active"
                  className="list-item"
                >
                  <span className="list-item-icon">
                    <i className="material-icons">chat</i>
                  </span>
                  <span className="list-item-title">Chat Room</span>
                </NavLink>
              </div>
              <Route path="/dashboard" exact component={Main} />
              <Route path="/chats" component={Chat} />
            </React.Fragment>
          </Router>
        </div>
        <div
          className="overlay"
          style={this.state.toggleModal ? showModal : hideModal}
        >
          <div className="modal-box" onClick={this.closeModal.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
