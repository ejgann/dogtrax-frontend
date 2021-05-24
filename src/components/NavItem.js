import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavItem extends React.Component {
  
    state = {
        target: 'home'
    };

    handleClick(event) {
        this.setState({
            target: event.target.value
        });
    }
  
  
    render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <button onClick={this.handleClick} value="home">
                Home
              </button>
            </li>
            <li>
              <button onClick={this.handleClick} value="dogs">
                Dogs
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavItem;
