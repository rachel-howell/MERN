import React, { useState } from 'react'

const Form = () => {

    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");

    return (
        <div className="border col-4 mx-auto">
            <form className="p-3">
                <label className="form-label">First Name: </label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value) }/>
                <label className="form-label pt-3">Last Name: </label>
                <input type="text" onChange={ (e) => setLastName(e.target.value) }/>
                <label className="form-label pt-3">Email: </label>
                <input type="text" onChange={ (e) => setEmail(e.target.value) }/>
                <label className="form-label pt-3">Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) }/>
                <label className="form-label pt-3">Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) }/>
                <button className="btn mx-auto border mt-3" type="submit">Submit</button>
            </form>
            <div>
                <h2>Your Form Data</h2>
                <h5 className="text-start ps-5">First Name: { firstName } </h5>
                <h5 className="text-start ps-5">Last Name: { lastName } </h5>
                <h5 className="text-start ps-5">Email: { email } </h5>
                <h5 className="text-start ps-5">Password: { password } </h5>
                <h5 className="text-start ps-5">Confirm Password: { confirmPassword } </h5>
            </div>
        </div>
    )  
}

export default Form