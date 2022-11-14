import React,{createContext, useState} from 'react'



export const contextoGeneral = createContext();

const ContextContainer = ({children}) => {
    const [cartList, setCartList] = useState([]);
  
    
    
    const addToCart = (item, newQuantity) => {  
      const newCart = cartList.filter(prod => prod.id !== item.id );
      newCart.push({...item, quantity: newQuantity});
      setCartList(newCart)

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
