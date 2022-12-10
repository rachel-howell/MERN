import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = () => {

    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState(0);
    const [ description, setDescription ] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err=>console.log(err))
        e.target.reset();
        window.location.reload();
    }


  return (
    <div>
        <h1>Product Manager</h1>
        <form onSubmit={onSubmitHandler} className="col-3 mx-auto">
            <p>
                <label className="me-2 form-label">Title</label>
                <input className="form-control" type="text" onChange={(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label className="me-2 form-label">Price</label>
                <input className="form-control" type="text" onChange={(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label className="me-2 form-label">Description</label>
                <input className="form-control" type="text" onChange={(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit" />
        </form>
    </div>
  )
}

export default ProductForm