import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import axios from 'axios'

function List() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        (async function sendProducts() {
            try {
                const response = await axios.get('http://localhost:8888/api/V1/categories/list');
                setProducts(response.data.items);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []); 
    return (
        <div>
            {products.map((product, i) => {
                return (
                    <div key={i}>
                       <Link to={`/product/${product.id}`}>
                           {product.name}
                       </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default List;