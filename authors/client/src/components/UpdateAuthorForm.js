import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const UpdateAuthorForm = () => {

    const {id} = useParams();
    const [ author, setAuthor ] = useState("");
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ errors, setErrors ] = useState({});
    const navigate = useNavigate();

    useEffect (() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => 
                setAuthor(res.data),
                setFirstName(author.firstName),
                setLastName(author.lastName)
            )
            .catch(err => console.log(err))
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/authors/${id}`, {
            firstName,
            lastName
        })
            .then(res => {
                console.log(res.data);
                navigate("/");
            })
            .catch(err=>setErrors(err.response.data.errors))
    }
  return (
    <div>
        <h1 className="mt-3">Edit an Author</h1>
        <form className="col-3 mx-auto" onSubmit={submitHandler}>
            <div className="form-group">
                <label>First Name:</label>
                <input className="form-control" type="text" defaultValue={author.firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                {
                    errors.firstName ? <div className="text-danger">{errors.firstName.message}</div> : null
                }
            </div>
            <div className="form-group mt-2">
                <label>Last Name:</label>
                <input className="form-control" type="text" defaultValue={author.lastName} onChange={(e)=>setLastName(e.target.value)}/>
                {
                    errors.lastName ? <div className="text-danger">{errors.lastName.message}</div> : null
                }
            </div>
            <div>
                <Link className="btn border btn-primary mt-2" to={'/'}>Cancel</Link>
                <input className="btn border btn-primary mt-2" type="submit" />
            </div>
        </form>
        
    </div>
  )
}

export default UpdateAuthorForm