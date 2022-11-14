import React,{createContext, useState} from 'react'



export const contextoGeneral = createContext();

const ContextContainer = ({children}) => {
  
    const [cartList, setCartList] = useState([]);
  
  
    const addToCart = (item, newQuantity) => {  
     if (isInCart(item.id)){
      const carritoActualizado = cartList.map ((prod)=>{
        if(prod.id === item.id){
          return {...prod, quantity:prod.quantity + newQuantity}
        }else{
          return prod
        }
      })
      setCartList(carritoActualizado)
     }else{
      const purchase = {...item, quantity:newQuantity}
      setCartList([...cartList, purchase])
     }

    }
    const removeList = () => setCartList([]);
    
    const isInCart = (id) => {
      return cartList.find (product => product.id === id) ? true : false ;
    }
    const deleteItem = (id) => setCartList(cartList.filter(product => product.id !==id));
    
console.log("carrito", cartList);

  return (
    <contextoGeneral.Provider value={{
      cartList, 
      addToCart, 
      removeList, 
      deleteItem, 
      isInCart
      }}>

        {children}
    </contextoGeneral.Provider>
  )
}

export default ContextContainer
