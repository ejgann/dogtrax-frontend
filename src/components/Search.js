import React, { Component } from 'react'
import Dogs from './Dogs';

class Search extends Component {
    state = {   
        query: ''
    };

    handleChange = (event) => {
        this.setState({query: event.target.value})
    };
    dynamicSearch = () => {
        return this.props.dogs.filter(dog => dog.name.toLowerCase().includes(this.state.query.toLowerCase()))
    }

    
    render() {
        console.log(this.props.dogs)

        return (
            <div>
                <h2>Search Among Dogs</h2>
                    <input type="text" value="" id="search-input" placeholder="Search..." 
                       onChange={this.handleChange} />
                   
                        {/* <li>{dog.name}></li> */}
            </div>
        )
    }
}

export default Search;