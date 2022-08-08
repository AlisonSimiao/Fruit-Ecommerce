import { createContext, useState } from "react";

const CartContext = createContext()

function CartProvider({children}) {
    const [cart, setCart] = useState({});

    function addToCart( product ) {
        console.log(cart);
        setCart( 
            (oldState)=>{
                return(
                    {
                        ...oldState, [product.name]: product 
                    }
                )
            }            
        )
    }

  return (
    <CartContext.Provider value={ { cart, addToCart } }>
        {children}
    </CartContext.Provider>
  )
}

export {
    CartProvider,
    CartContext
}