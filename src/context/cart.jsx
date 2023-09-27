import { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cart'

export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  // const addToCart = (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
  function addToCart (product) {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }
  const removeFromCart = (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  const clearCart = (product) => dispatch({ type: 'CLEAR_CART', payload: product })

  return { state, addToCart, removeFromCart, clearCart }
}

export function CartProvider ({ children }) {
  // const [cart, setCart] = useState([])

  // const addToCart = (product) => {
  //   // check if the product is already in the cart
  //   const productInCartIndex = cart.findIndex((item) => item.id === product.id)

  //   if (productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart)
  //     newCart[productInCartIndex].quantity += 1
  //     return setCart(newCart)
  //   }

  //   // if the product isn´t in the cart
  //   setCart(function (prevState) {
  //     return [...prevState, { ...product, quantity: 1 }]
  //   })
  // }

  // const removeFromCart = (product) => {
  //   setCart((prevState) => prevState.filter((item) => item.id !== product.id))
  // }

  // const clearCart = () => {
  //   setCart([])
  // }

  // return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>

  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return <CartContext.Provider value={{ cart: state, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
}
