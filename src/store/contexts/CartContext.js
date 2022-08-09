import { createContext, useEffect, useState } from "react";
import { loadLocal, saveLocal } from "../../utils/localStorage";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  
  function removeToCart(name) {
    setCart((oldState) => {
      delete oldState[name];
      const newState = oldState;
      saveLocal("CartFruits", newState)
      return {
        ...newState
      };
    });
  }
  function moreOne(id){
      setCart( oldState =>{
        const newState = {
          ...oldState,
          [id]: {
            ...oldState[id],
            quantity: oldState[id].quantity + 1
            }
          } 

          saveLocal( "CartFruits", newState);
          return newState;
      })
  }
  function clean(params) {
    setCart({});
  }
  function minusOne(id) {
    setCart( oldState =>{
      const newState = {
        ...oldState,
        [id]: {
          ...oldState[id],
          quantity: oldState[id].quantity - 1
          }
        } 
        
        saveLocal( "CartFruits", newState);
        return newState;
    })
  }
  function addToCart(product) {
    setCart((oldState) => {
      let quantity = 1;
      if (oldState[product.name])
        quantity = oldState[product.name].quantity + 1;

      const newState = {
        ...oldState,
        [product.name]: { product, quantity },
      };
      saveLocal("CartFruits", newState);
      return newState;
    }); 
  }

  useEffect(()=>{
    const cartLocal =  loadLocal("CartFruits")

    if (cartLocal) {
      setCart( cartLocal )
    }

  },[  ])


  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart, moreOne, minusOne, clean}}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
