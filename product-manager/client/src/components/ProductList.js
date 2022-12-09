import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';


const ProductList = () => {

    const [ productList, setProductList ] = useState([]);
    const { id } = useParams();

    const navHandler = (e) => {
        e.preventDefault();

    }

    useEffect (() => {
        axios
            .get('http://localhost:8000/api/products')
            .then((result) => setProductList(result.data))
            .catch(err => console.log(err))
    }, []);

  return (
    <div className="border-top mt-3 col-4 mx-auto">
        <h1>All Products:</h1>
        { 
            productList.map(product => (
                <div>
                    <Link to={`/details/${product._id}`}>{ product.title }</Link>
                </div>
            ))
        }
    </div>
  )
}

export default ProductList