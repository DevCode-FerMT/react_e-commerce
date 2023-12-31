import { useId } from 'react'
import './Cart.css'
import { ClearCartIcon, CartIcon } from './Icons'
import { useCart } from '../hooks/useCart'
import { CartItem } from './CartItem'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' name={cartCheckboxId} id={cartCheckboxId} hidden />
      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <CartItem key={product.id} addToCart={() => addToCart(product)} {...product} />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
