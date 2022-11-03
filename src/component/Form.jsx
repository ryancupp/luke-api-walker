import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {
    const [query, setQuery] = useState()
    const [id, setId] = useState(1)
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(query)
        console.log(id)
        navigate("/"+ query +"/" + id)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                Search for:
                <select onChange={e => setQuery(e.target.value) }>
                    <option value="people">people</option>
                    <option value= "planets">planets</option>
                </select>
                <input type="number" onChange={e => setId(e.target.value) } value={id} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Form