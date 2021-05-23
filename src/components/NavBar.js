import React, {Component} from 'react';
import NavItem from './NavItem';

class NavBar extends Component {

    state = {
        'NavItemActive':''
    }
    
    activeitem= (x) => {
        if (this.state.NavItemId.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        // 'x' parameter represents the clicked NavItem's id
        // NavItemId refers to the DOM element id of the NavItem -- 'home', 'dogs', etc

        this.setState({'NavItemActive': x}, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };

    render() {
        return (
            <nav>
                <ul>
                    <NavItem item="Home" tolink='/' active={this.activeitem}></NavItem>
                    <NavItem item="Dogs" tolink='/dogs' ></NavItem>
                </ul>
            </nav>
        )
    }
}

export default NavBar;