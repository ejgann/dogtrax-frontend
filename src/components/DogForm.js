import React from 'react';


// will be a controlled form (i.e. state), which needs to be a class component
class DogForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label>Dog's Name:</label> <input type='text' placeholder='Name'/><br></br>
                    <label>Dog's Age:</label> <input type='text' placeholder='Age'/><br></br>
                    <label>Dog's Gender:</label> <select name='gender' id='gender'>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        </select><br></br>
                    <label>Dog's Breed:</label> <input type='text' placeholder='Breed'></input><br></br>
                    <label>Special Notes:</label> <textarea placeholder='Notes'></textarea><br></br>
                </form>
            </div>
        )
    }
}

export default DogForm;