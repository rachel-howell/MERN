import React from 'react'

const AuthorForm = () => {
  return (
    <div>
        <h1>Add an Author</h1>
        <form className="col-3 mx-auto">
            <div className="form-group">
                <label>First Name:</label>
                <input className="form-control" type="text" onChange={}/>
            </div>
            <div className="form-group mt-2">
                <label>Last Name:</label>
                <input className="form-control" type="text" />
            </div>
            <input className="btn border btn-primary mt-2" type="submit" />
        </form>
    </div>
  )
}

export default AuthorForm