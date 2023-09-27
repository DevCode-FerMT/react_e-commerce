export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

const actions = {
  add_to_cart: 'ADD_TO_CART',
  remove_from_cart: 'REMOVE_FROM_CART',
  clear_cart: 'CLEAR_CART'
}

// update localStorage with state for cart
export const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case actions.add_to_cart: {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex((item) => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocalStorage(newState)
        return newState
      }

      const newState = [...state, { ...actionPayload, quantity: 1 }]

      updateLocalStorage(newState)
      return newState
    }

    case actions.remove_from_cart: {
      const { id } = actionPayload
      const newState = state.filter((item) => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }

    case actions.clear_cart: {
      updateLocalStorage([])
      return []
    }
  }
}
