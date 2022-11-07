import { SnackbarContent, Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';






const ItemListContainer = () => {

  const { iditem } = useParams();

    const [product,setProduct] =useState({});
    let productsHC =[
        {
            id: 1,
            name: "Stradivarius",
            category: "Vino Tinto",
            price: 100,
            rating: 5,
            image:"/assets/img/vino-stradivarius-01.jpg",
            description: "insertar caracteristicas",
        },
        {
            id: 2,
            name: "Malamado",
            category: "Vino tinto",
            price: 80,
            rating: 2,
            image: "/assets/img/vino-malamado-01.jpg",
            description: "insertar caracteristicas",
        },
        {
            id: 3,
            name: "Lopez",
            category: "Vino blanco",
            price: 20,
            rating: 4,
            image: "/assets/img/vino-lopez-01.jpg",
            description: "insertar caracteristicas",
        },
        {
            id: 4,
            name: "Angelica Zapata",
            category: "Vino tinto",
            price: 2220,
            rating: 5,
            image: "/assets/img/vino-angelicazapata-01.jpg",
            description: "insertar caracteristicas",
          },
          {
            id: 5,
              name: "Rutini",
              category: "Vino tinto",
              price: 220,
              rating: 4,
              image: "/assets/img/vino-rutini-01.jpg",
              description: "insertar caracteristicas",
          },
          {
            id: 6,
              name: "Jack Daniels",
              category: "Whisky",
              price: 220,
              rating: 4,
              image: "/assets/img/jack-daniels-01.jpg",
              description: "insertar caracteristicas",
          },
          {
            id: 7,
              name: "Red Label",
              category: "Whisky",
              price: 220,
              rating: 4,
              image: "/assets/img/red-label-01.jpg",
              description: "insertar caracteristicas",
          },
          {
            id: 8,
              name: "Bombay",
              category: "Gin",
              price: 220,
              rating: 4,
              image: "/assets/img/bombay-01.jpg",
              description: "insertar caracteristicas",
          },
    ];


  useEffect(()=> {

    const productoPromise = new Promise((res, rej)=>{
      setTimeout(() => {
          res(productsHC.find((item)=> item.id == iditem));
      }, 2000);
  });



  productoPromise.then((res)=> setProduct(res));


  },[iditem]);

  



  return (
    <div>
        {product.id ?(
            <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
        
        
          
          <ItemDetail product={product}/>
          
        </Grid>
      </Box>
        ):<SnackbarContent message="Cargando..." sx={{width:"100px"}}></SnackbarContent>
        }
         
        
       
    </div>
  )
}

export default ItemListContainer
