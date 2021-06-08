import React, { useState } from 'react'

function Search(props) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const handleChange = event => {
        setQuery(event.target.value);
    };
    const dogs = props.dogs;

    function dynamicSearch(dog) {
        const results = dogs.filter(dog => dog.name.toLowerCase().includes(query.toLowerCase())
        );
        return results;
    }

    // const dynamicSearch = () => {
    //     return props.dogs.filter(dog => dog.name.toLowerCase().includes(query.toLowerCase()));
    // };

    return (
        <div>
            <input 
                type="text"
                placeholder="Search for a Dog..."
                value={query}
                onChange={handleChange}
            />
            <ul>
                {dynamicSearch(results)}
            </ul>
        </div>
    );
    }


export default Search;