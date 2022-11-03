import React from 'react'
import { useState } from 'react';
import ItemList from './ItemList';
const ItemListContainer = () => {

    const [products,setProducts] =useState([]);
    let productosHC =[
        {
            id: 1,
            name: "Stradivarius",
            productType: "Vino Tinto",
            price: 100,
            rating: 5,
            image:"/assets/img/vino-stradivarius-01.jpg",
            description: "insertar caracteristicas",
        },
        {
            id: 2,
            name: "Malamado",
            productType: "Vino tinto",
            price: 80,
            rating: 2,
            image: "/assets/img/vino-malamado-01.jpg",
            description: "insertar caracteristicas",
        },
        {
            id: 3,
            name: "Lopez",
            productType: "Vino blanco",
            price: 20,
            rating: 4,
            image: "/assets/img/vino-lopez-01.jpg",
            description: "insertar caracteristicas",
        },
    ];

    const productosPromise = new Promise((res, rej)=>{
        setTimeout(() => {
            res(productosHC);
        }, 2000);
    });



    productosPromise.then((res)=> setProducts(res));
  return (
    <div>
      <ItemList/>
    </div>
  )
}

export default ItemListContainer
