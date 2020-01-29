import React from 'react';
import axios from 'axios';

const CreatePersonPage = (props) => {
    const createPerson = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/person/", {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value
        }).then( props.history.push("/") )
    }
    return(
        <div>
            <form onSubmit={createPerson}>
                <label>First Name:</label><input type="text" name="firstName"></input>
                <label>Last Name:</label><input type="text" name="lastName"></input>
                <button>Create Person</button>
           </form>
        </div>
    );
}

export default CreatePersonPage;