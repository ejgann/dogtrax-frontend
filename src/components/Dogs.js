import React from "react";
import { Link } from "react-router-dom";
import { CardDeck, Card } from "react-bootstrap";

const Dogs = (props) => {
  return (
    <div>
      <h2>Dog Clients</h2>
      {props.dogs.map((dog) => (
        <li key={dog.id}> 
          <Link to={`/dogs/${dog.id}`}>{dog.name}</Link>
        </li>

        // <CardDeck
        //   style={{ width: "900", display: "inline", flexDirection: "row" }}>
        //   <Card >
            
        //     <Card.Body>
        //       <Card.Text >
        //           <Link key={dog.id} to={`/dogs/${dog.id}`}>{dog.name}</Link>{" "}
        //       </Card.Text>
        //     </Card.Body>
        //   </Card>
        // </CardDeck>
      ))}
    </div>

    // iterating over dogs in store; for each dog, want to create a dog component and must accept a dog as props
  );
};

export default Dogs;
