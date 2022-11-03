import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Item from './Item';
import products from './ItemListContainer'
const ItemList = () => {



  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          { 
           products.map(product =>(
                  <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <Item product={product}/>
                  </Grid>
          ))
          }
                  
          
        </Grid>
      </Box>
    </div>
  )
}

export default ItemList
