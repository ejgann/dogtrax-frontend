export const addReport = (report, dogId) => {
    

    return (dispatch) => {

        fetch(`http://localhost:3000/api/v1/dogs/${dogId}/reports`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json'
            },
            body: JSON.stringify(report)
        })
        .then(response => response.json())
        .then(dog => dispatch({type: 'ADD_REPORT', payload: dog})
        )
    }
}