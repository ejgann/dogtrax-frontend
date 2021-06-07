import React from "react";
import { Link } from "react-router-dom";

class NavItem extends React.Component {

  
  state = {
    target: "home",
  };

  handleClick(event) {
    this.setState({
      target: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`/`} className="custom-link">
                Home
              </Link>
            </li>
            <li>
              <Link to={`/dogs/#dogClients`} className="custom-link">
                Dog Clients
              </Link>
            </li>
            <li>
              <Link to={`/dogs/new`} className="custom-link">
                Add New Dog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavItem;
