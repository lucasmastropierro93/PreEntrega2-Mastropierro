import { Button } from '@mui/material';
import React from 'react'
import { useState } from 'react'
 
const ItemCount = ({stock,initial, onAdd}) => {
const [numero,setNumero] = useState(initial)
 
function sumar(){
    if (numero < stock) {
        setNumero( numero + 1);
    }
    }
 
 
function restar(){
    if (numero > 1){
        setNumero(numero - 1);
    }
}
 
  return (
    <section>
   
 
    <Button onClick={sumar} variant="contained" style={{background:'#8E1F4C'}}>+</Button>
    <h2>{numero}</h2>
    <Button onClick={restar} variant="contained" style={{background:'#8E1F4C'}}>-</Button>
    <h6>stock disponible:{stock}</h6>
    <Button variant="contained" style={{background:'#8E1F4C'}} onClick={()=> onAdd(numero)}>Agregar al carrito</Button>
    </section>
 
  )
}
 
export default ItemCount