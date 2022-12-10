import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

const ProductForm = () => {

    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState(0);
    const [ description, setDescription ] = useState("");
    const [ product, setProduct ] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect (() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then(result => 
                setProduct(result.data),
                setTitle(product.title),
                setPrice(product.price),
                setDescription(product.description)
            )
            .catch(err => console.log(err))
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err=>console.log(err))
        navigate("/")
        // e.target.reset();
        // window.location.reload();
    }


  return (
    <div>
        <h1>Update Product</h1>
        <form onSubmit={onSubmitHandler} className="col-3 mx-auto">
            <p>
                <label className="me-2 form-label">Title</label>
                <input className="form-control" type="text" defaultValue={product.title} onChange={(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label className="me-2 form-label">Price</label>
                <input className="form-control" type="text" defaultValue={product.price} onChange={(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label className="me-2 form-label">Description</label>
                <input className="form-control" type="text" defaultValue={product.description} onChange={(e)=>setDescription(e.target.value)}/>
            </p>
            <div className="container d-flex mx-auto justify-content-between mt-3">
                <input className="btn btn-success" type="submit" />
                <Link className="btn btn-info" to="/">Back</Link>
            </div>
        </form>
    </div>
  )
}

export default ProductForm