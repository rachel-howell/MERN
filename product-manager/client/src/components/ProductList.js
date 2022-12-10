import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';


const ProductList = () => {

    const [ productList, setProductList ] = useState([]);
    const { id } = useParams();

    useEffect (() => {
        axios
            .get('http://localhost:8000/api/products')
            .then((result) => setProductList(result.data))
            .catch(err => console.log(err))
    }, []);

    const deleteHandler = (id) => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((result) => console.log(result))
            .catch(err => console.log(err))
            window.location.reload();
    }

  return (
    <div className="border-top mt-3 col-4 mx-auto">
        <h1>All Products:</h1>
        { 
            productList.map(product => (
                <div className="h5 container d-flex p-2 mx-auto my-2 justify-content-between border-top">
                    <Link to={`/details/${product._id}`}>{ product.title }</Link>
                    <div>
                        <btn className="btn border btn-danger" onClick={()=>deleteHandler(product._id)}>Delete</btn>
                        <Link className="btn border btn-success" to={`/edit/${product._id}`}>Edit</Link>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ProductList