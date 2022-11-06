import React, { useState } from 'react'

const Form = () => {

    const [ password, setPassword ] = useState("");
    const [ firstError, setFirstError ] = useState("");
    const [ lastError, setLastError ] = useState("");
    const [ emailError, setEmailError ] = useState("");
    const [ passwordError, setPasswordError ] = useState("");
    const [ confirmPasswordError, setConfirmPasswordError ] = useState("");


    const handleFirst = (e) => {
        e.preventDefault();
        e.target.value.length < 2 ?
        setFirstError("First Name must be at least 2 characters.") :
        setFirstError("");
    }

    const handleLast = (e) => {
        e.preventDefault();
        e.target.value.length < 2 ?
        setLastError("Last Name must be at least 2 characters.") :
        setLastError("");
    }

    const handleEmail = (e) => {
        e.preventDefault();
        e.target.value.length < 5 ?
        setEmailError("Email must be at least 5 characters.") :
        setEmailError("");
    }

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
        e.target.value.length < 8 ?
        setPasswordError("Password must be at least 8 characters.") :
        setPasswordError("");
    }

    const handleConfirmPassword = (e) => {
        e.preventDefault();
        e.target.value != password ?
        setConfirmPasswordError("Passwords must match.") :
        setConfirmPasswordError("");
    }
    


    return (
        <div className="border col-4 mx-auto">
            <form className="p-3">
                <label className="form-label">First Name: </label>
                <input type="text" onChange={ handleFirst }/>
                {
                    firstError ?
                    <p>{ firstError }</p> :
                    ''
                }
                <label className="form-label pt-3">Last Name: </label>
                <input type="text" onChange={ handleLast }/>
                {
                    lastError ?
                    <p>{ lastError }</p> :
                    ''
                }
                <label className="form-label pt-3">Email: </label>
                <input type="text" onChange={ handleEmail }/>
                {
                    emailError ?
                    <p> { emailError }</p> :
                    ''
                }
                <label className="form-label pt-3">Password: </label>
                <input type="text" onChange={ handlePassword }/>
                {
                    passwordError ?
                    <p> { passwordError }</p> :
                    ''
                }
                <label className="form-label pt-3">Confirm Password: </label>
                <input type="text" onChange={ handleConfirmPassword }/>
                {
                    confirmPasswordError ?
                    <p> { confirmPasswordError }</p> :
                    ''
                }
                <button className="btn mx-auto border mt-3" type="submit">Submit</button>
            </form>
        </div>
    )  
}

export default Form