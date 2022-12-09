import React, { useState, useEffect } from 'react';
import axios from 'axios'

const ProductDetails = () => {

    const [ product, setProduct ] = useState({"title":"meow", "price": 10.99, "description": "cat"});

    // useEffect (() => {
    //     axios
    //         .get('http://localhost:8000/api/products/:id')
    //         .then(result => setProduct(result.data))
    //         .catch(err => console.log(err))
    // }, []);

  return (
    <div className="border-top mt-3 col-4 mx-auto">
        <h1>Details:</h1>
            <div>
                <h1>hih ih{ product.title }</h1>
                <h4>{ product.price }</h4>
                <h3>Description: { product.description }</h3>
            </div>
    </div>
  )
}

export default ProductDetails