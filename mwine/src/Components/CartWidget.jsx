import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';


const CartWidget = () =>{

return(
    <Badge badgeContent={2} color="success">
    <ShoppingCartIcon color="primary"></ShoppingCartIcon> 
    </Badge>
);
}

 
 
 export default CartWidget;