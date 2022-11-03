import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Planet = () => {
    const [planet, setPlanet] = useState([])
    const { planetId } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${planetId}`)
            .then((apiResponse) => {
                console.log(apiResponse.data);

                setPlanet(apiResponse.data);

            })
            .catch(err => console.log(err))
    }, [planetId])

    return (
        <div>
            <h1>{planet.name}</h1>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
        </div>
    )
}

export default Planet