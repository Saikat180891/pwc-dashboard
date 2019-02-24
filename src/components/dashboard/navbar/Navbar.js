import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="nav-bar">
        <div>
          <input
            type="text"
            placeholder="Search transactions, invoices or help"
            className="search-box"
          />
        </div>
        <div className="nav-options" />
      </div>
    );
  }
}

export default Navbar;
