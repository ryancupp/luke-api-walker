import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Person = (props) => {

    const [person, setPerson] = useState([])

    const { personId } = useParams();


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${personId}`)
            .then((apiResponse) => {
                console.log(apiResponse.data);

                setPerson(apiResponse.data);

            })
            .catch(err => console.log(err))
    }, [personId])

    return (

        <div>
            <h1>{person.name}</h1>
            <p>Eye color: {person.eye_color}</p>
            <p>Gender: {person.gender}</p>
            <p>Hair color: {person.hair_color}</p>
            <p>Mass: {person.mass}</p>
        </div>

    )
}

export default Person