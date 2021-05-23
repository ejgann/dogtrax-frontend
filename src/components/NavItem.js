import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navitem extends Component {
    constructor(props) {
        super(props);
        this.props.item.active = this.props.item.bind(this)
    }

    render() {
        return (
            <li id={this.props.item}>
                <Link to={this.props.tolink} onClick={this.props.active.bind(this, this.props.item)}>
                    {this.props.item}
                </Link>
            </li>
        )
    }
}

export default Navitem;