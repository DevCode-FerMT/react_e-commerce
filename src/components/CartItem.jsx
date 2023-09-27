export function CartItem ({ thumbnail, price, title, description, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={description} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}
