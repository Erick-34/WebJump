import React, { useState, useEffect } from "react";
import axios from 'axios'

function List() {
    const [products, setProducts] = useState([]);
    const [data, setData] = useState([]);
    const [id, setId ] = useState(1);

    //aqui está buscando a lista de categorias do banco de dados.
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

    //aqui está buscando todos os produtos do banco de dados
    useEffect(() => {
        (async function sendListProducts() {
            try {
                const list = await axios.get(`http://localhost:8888/api/V1/categories/${id}`);
                setData(list.data.items);
            } catch (err) {
                console.error(err);
            }
        })();
    }, [data]); 

    return (
        <div>
            {/*Aqui está interando sobre o array de categorias e renderizando os mesmo*/}
            {products.map((product, i) => {
                return (
                    <div key={i}>
                       <ul>
                            <li><button onClick={() => setId(product.id)}>{product.name}</button></li>
                       </ul>
                    </div>
                )
            })}
            <div>
                {/*Aqui está interando sobre o array de produtos e renderizando os mesmos*/}
                {data.map((value, i) => {
                    return (
                        <div key={i}>
                           <h3>{value.name}</h3>
                           <span>{value.price}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default List;