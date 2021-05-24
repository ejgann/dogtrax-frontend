import React, { Component } from "react";
import {Route, Link} from 'react-router-dom';

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
              <Link to={`/`}>Home</Link>
            </li>
            <li>
            <Link to={`/dogs`}>All Dogs</Link>

              {/* <button onClick={this.handleClick} value="dogs" Link to={`/dogs`}></Link>
                Dogs
              </button> */}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavItem;
