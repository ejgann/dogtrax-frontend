import React from 'react'

const Dog = (props) => {

console.log(props)

let dog = props.dogs[props.match.params.id - 1]
console.log(dog);

    return (
        <div>
          Name: <p> {dog ? dog.name : null} </p>
          Age: <p> {dog ? dog.age : null} </p>
          Gender: <p> {dog ? dog.gender : null} </p>
          Breed: <p> {dog ? dog.breed : null} </p>
          Notes: <p> {dog ? dog.notes : null} </p>

        </div>
    )
}

export default Dog;