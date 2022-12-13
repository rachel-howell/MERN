import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AuthorList = () => {

    const [ authorList, setAuthorList ] = useState([]);

    useEffect(()=>{
        axios
            .get('http://localhost:8000/api/authors')
            .then((res) => setAuthorList(res.data))
            .catch(err => console.log(err))
    }, [])

    const deleteHandler = (id) => {
        axios
            .delete(`http://localhost:8000/api/authors/${id}`)
            .then((res) => console.log(res.data))
            .catch(err => console.log(err))
        window.location.reload();
    }


  return (
    <div className="col-4 mx-auto">
        <h1 className="mt-3">Favorite Authors</h1>
        <Link className="btn border btn-primary" to="/new">Add an Author</Link>

        <p className="mt-3">We have quotes by:</p>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
        {
            authorList.map(author => (
                <>
                <tbody>
                    <tr>
                        <td className="p-3">{author.firstName} {author.lastName}</td>
                        <td>
                            <Link className="btn btn-success border m-1" to={`/edit/${author._id}`}>Edit</Link>
                            <p className="btn btn-danger border m-1" onClick={()=>deleteHandler(author._id)}>Delete</p>
                        </td>
                    </tr>
                </tbody>
                </>
            ))
        }
        </table>
    </div>
  )
}

export default AuthorList