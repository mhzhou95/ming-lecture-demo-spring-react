import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Person = (props) => {
    const deletePerson = (event) => {
        event.preventDefault();
        axios.delete("http://localhost:8080/person/" + props.person.id.toString())
        .then(props.getPersons)
    }

    return(
        <div>
            <p> Person: {props.person.firstName}, {props.person.lastName}  </p>
            <button onClick= {deletePerson}>delete</button>
            <button><Link to ={`edit/${props.person.id}`} >Edit</Link></button>
        </div>
    );
}

export default Person;