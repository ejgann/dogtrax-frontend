import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const Search = (props) => {
    return (
    <div>
        <Form inline>
          <FormControl type="text" value={props.query} placeholder="Search for a Dog..." className="mr-sm-2" onChange={props.handleChange} />
          <Button onClick={props.dynamicSearch} variant="outline-primary">Search</Button>
        </Form>
        <br></br>
    </div>
    )
}



export default Search;