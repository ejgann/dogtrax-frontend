// container should render other components, pass them any necessary data
// typically class components since often need to have state, lifecycle methods, etc, which are only available in class components

import React from 'react'
import DogForm from '../components/DogForm'
import Dogs from '../components/Dogs'

class DogsContainer extends React.Component {
    render() {
        return (
            <div>
                <DogForm />
                <Dogs />
            </div>

        )
    }


}

export default DogsContainer;