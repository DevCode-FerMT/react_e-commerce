import { useId } from 'react'
import './Cart.css'
import { ClearCartIcon, CartIcon } from './Icons'

export function Cart() {
    const cartCheckboxId = useId()
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input type="checkbox" name={cartCheckboxId} id={cartCheckboxId} hidden />
            <aside className='cart'>
                <ul>
                    <li>
                        <img src="https://i.dummyjson.com/data/products/6/thumbnail.png" alt="mac" />
                        <div>
                            <strong>Mac</strong> - $1499
                        </div>
                        <footer>
                            <small>Qty: 1</small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>
                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}