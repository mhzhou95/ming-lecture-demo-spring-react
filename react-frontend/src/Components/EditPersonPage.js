import React, { useState, useEffect }  from 'react';
import axios from 'axios';

const EditPersonPage = (props) => {
    const [person, setPerson] = useState({
        firstName: "",
        lastName: ""
    });

    useEffect( ()=>{
      axios.get("http://localhost:8080/person/" + props.match.params.id)
        .then( response => response.data)
        .then( data => setPerson(data) ) 
    }, [props])

    const onChange = (event) => {
        event.preventDefault();
        setPerson({
            ...person,
            [event.target.name]: event.target.value
         })
    }
    const editPerson = (event) => {
        event.preventDefault();
        axios.put("http://localhost:8080/person/" + props.match.params.id, {
           firstName: person.firstName,
           lastName: person.lastName
        }).then( ()=> props.history.push("/") )
    }
    return(
        <div>
            <form onSubmit={editPerson}>
                <label>First Name: </label><input type="text" name="firstName" value={person.firstName} onChange={onChange}></input>
                <label>Last Name: </label><input type="text" name="lastName" value={person.lastName} onChange={onChange}></input>
                <button>Edit</button>
            </form>
        </div>
    );
}

export default EditPersonPage;