import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios'

function Categorias() {
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    
    console.log(id)

    useEffect(() => {
        (async function sendProducts() {
            try {
                const response = await axios.get(`http://localhost:8888/api/V1/categories/${id}`);
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
                        <h5>{product.name}</h5>
                        <p>{product.price}</p>
                    </div>
                )   
            })}
        </div>
    )
}

export default Categorias;