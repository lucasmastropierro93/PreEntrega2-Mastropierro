import React from 'react'
import { useContext } from 'react'
import { contextoGeneral } from '../Contexts/ContextContainer'
import Tabla from './Tabla'

const Cart = () => {

    const {totalPrice} =useContext(contextoGeneral)


  return (
    <div>
      <Tabla/>
<h4>Resúmen</h4>
<h5>Total: ${totalPrice()}</h5>
    </div>
  )
}

export default Cart;
