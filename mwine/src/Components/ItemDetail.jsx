import { Grid, Button } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';





export default function ItemDetail ({product: {id, name, category, price, rating, image, description}}) {
  

 

  return (
   <Grid container spacing={2}>
    <Grid item lg={6}>
      <img src={image} alt="imagen detalle producto" height={"500px"} width={"600px"}/>
    </Grid>
    <Grid item lg={6}>
      <h2>{name}</h2>
      <h3>{category}</h3>
      <p>{description}</p>
      <h2>${price}</h2>
      <ItemCount stock={10} initial={1}/>
      <Button variant="contained" style={{background:'#8E1F4C'}}><Link to="/cartwidget" style={{ color: '#FFF' }}>Agregar al carrito</Link></Button>
    </Grid>
    
      
   </Grid>
    
  );
}