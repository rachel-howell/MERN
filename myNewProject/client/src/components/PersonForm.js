import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PersonForm = () => {
    
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }

  return (
    <div>
        <h2>testing</h2>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label className="me-2">First Name</label>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>
                <label className="me-2">Last Name</label>
                <input type="text" onChange={(e)=>setLastName(e.target.value)}/>
            </p>
            <input type="submit" />
        </form>
    </div>
  )
}

export default PersonForm;