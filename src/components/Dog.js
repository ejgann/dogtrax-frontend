import React from 'react'

const Dog = (props) => {

console.log(props)

    return (
        <li>
          {props.dog.name}
        </li>
    )
}

export default Dog;