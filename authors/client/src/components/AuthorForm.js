import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthorList from './AuthorList';

const AuthorForm = () => {

  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ errors, setErrors ] = useState({});
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("It's working")
    axios.post('http://localhost:8000/api/authors', {
        firstName,
        lastName
    })
        .then(res => {
          console.log(res.data);
          navigate('/')
      })
        .catch(err=> {
          setErrors(err.response.data.errors)
        }) 
  }


  return (
    <div>
        <h1 className="mt-3">Add an Author</h1>
        <form className="col-3 mx-auto" onSubmit={submitHandler}>
            <div className="form-group">
                <label>First Name:</label>
                <input className="form-control" type="text" onChange={(e)=>setFirstName(e.target.value)}/>
                {
                  errors.firstName ? <div className="text-danger">{errors.firstName.message}</div> : null
                }
            </div>
            <div className="form-group mt-2">
                <label>Last Name:</label>
                <input className="form-control" type="text" onChange={(e)=>setLastName(e.target.value)}/>
                {
                  errors.lastName ? <div className="text-danger">{errors.lastName.message}</div> : null
                }
            </div>
            <div>
              <Link className="btn border btn-primary mt-2" to={'/'}>Back</Link>
              <input className="btn border btn-primary mt-2" type="submit" />
            </div>
        </form>
    </div>
  )
}

export default AuthorForm