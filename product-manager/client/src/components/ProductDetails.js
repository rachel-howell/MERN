import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const ProductDetails = () => {

    const [ product, setProduct ] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect (() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then(result => setProduct(result.data))
            .catch(err => console.log(err))
    }, []);

    const deleteHandler = (id) => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((result) => console.log(result))
            .catch(err => console.log(err))
            navigate('/')
    }

  return (
    <div className="border-top mt-3 col-4 mx-auto">
        <h4>Details:</h4>
            <div>
                <h1>{ product.title }</h1>
                <h4>Price: { product.price }</h4>
                <h3>Description: { product.description }</h3>
                <div className="container d-flex mx-auto justify-content-between mt-3">
                    <Link to={`/`} className="btn border btn-info">Back</Link>
                    <Link className="btn border btn-success" to={`/edit/${product._id}`}>Edit</Link>
                    <btn className="btn border btn-danger" onClick={()=>deleteHandler(product._id)}>Delete</btn>
                </div>
            </div>
    </div>
  )
}

export default ProductDetails