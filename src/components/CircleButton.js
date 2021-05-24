import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class CircleButton extends Component {
    state = {

    }
    
    render() {
        return (
            <div className="round-button">
                <div className="round-button-circle">
                <p><Link to={`/dogs`}>Dog Clients</Link></p>
                </div>
            </div>
        )
    }
}

export default CircleButton;