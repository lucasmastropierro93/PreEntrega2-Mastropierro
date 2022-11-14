import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { productsHC } from '../Utils/data';




const ItemListContainer = () => {

  const { idcategory } = useParams();
    const [products,setProducts] =useState([]);
    

  useEffect(()=> {

    const productosPromise = new Promise((res, rej)=>{
      setTimeout(() => {
          res(productsHC);
      }, 2000);
  });


  productosPromise.then((res)=> setProducts(res));


  },[idcategory]);


  return (
    <div>
      
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
