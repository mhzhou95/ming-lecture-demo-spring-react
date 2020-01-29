import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Person from './Person';

const PersonList = () => {
    const [state, setState] = useState( [] );

    useEffect( ()=> {
        getPersons();
    }, []);

    const getPersons = () => {
        axios.get("http://localhost:8080/person/")
        .then(response => response.data )
        .then( data => setState( data ));
    }

    return(
        <div>
           { state.map( 
               (person)=> 
                    <Person 
                        key={person.id} 
                        person={person} 
                        getPersons={getPersons} 
                    />
            ) }
        </div>
    );
}

export default PersonList;